// ── State ──────────────────────────────────────────────
var selectedRating = null;

// ── Helpers ────────────────────────────────────────────
function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getPairIndex() {
  var key = getTodayKey();
  var seed = key.replace(/-/g, '');
  var hash = 0;
  for (var i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) % PAIRS.length;
  }
  return hash;
}

function loadJournal() {
  try { return JSON.parse(localStorage.getItem('al_journal') || '[]'); }
  catch (e) { return []; }
}

function saveJournal(entries) {
  localStorage.setItem('al_journal', JSON.stringify(entries));
}

function formatDate(isoKey) {
  return new Date(isoKey + 'T12:00:00').toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
}

// ── Render today ───────────────────────────────────────
var idx = getPairIndex();
var pair = PAIRS[idx];

document.getElementById('date-display').textContent = formatDate(getTodayKey());
document.getElementById('other-title').textContent = pair.other;
document.getElementById('other-desc').textContent = pair.otherDesc;
document.getElementById('auth-title').textContent = pair.auth;
document.getElementById('auth-desc').textContent = pair.authDesc;
document.getElementById('reflect-q').textContent = pair.q;

// Restore today's saved entry if exists
var existing = loadJournal().find(function(e) { return e.date === getTodayKey(); });
if (existing) {
  if (existing.note) document.getElementById('note').value = existing.note;
  if (existing.rating !== null && existing.rating !== undefined) selectRating(existing.rating);
  document.getElementById('saved-msg').textContent = 'Reflection saved for today.';
}

// ── Rating buttons ─────────────────────────────────────
function selectRating(val) {
  selectedRating = val;
  for (var i = 0; i < 3; i++) {
    var btn = document.getElementById('btn' + i);
    btn.classList.remove('sel-0', 'sel-1', 'sel-2');
    if (i === val) btn.classList.add('sel-' + val);
  }
}

document.getElementById('btn0').addEventListener('click', function() { selectRating(0); });
document.getElementById('btn1').addEventListener('click', function() { selectRating(1); });
document.getElementById('btn2').addEventListener('click', function() { selectRating(2); });

// ── Save ───────────────────────────────────────────────
document.getElementById('save-btn').addEventListener('click', function() {
  var today = getTodayKey();
  var journal = loadJournal().filter(function(e) { return e.date !== today; });
  journal.unshift({
    date: today,
    pairIdx: idx,
    other: pair.other,
    auth: pair.auth,
    rating: selectedRating,
    note: document.getElementById('note').value.trim()
  });
  saveJournal(journal);
  var msg = document.getElementById('saved-msg');
  msg.textContent = 'Saved.';
  msg.classList.add('flash');
  setTimeout(function() { msg.classList.remove('flash'); msg.textContent = ''; }, 2000);
});

// ── Navigation ─────────────────────────────────────────
document.getElementById('nav-today').addEventListener('click', function() {
  showView('today');
});
document.getElementById('nav-journal').addEventListener('click', function() {
  showView('journal');
  renderJournal();
});

function showView(name) {
  document.querySelectorAll('.view').forEach(function(v) { v.classList.remove('active'); });
  document.querySelectorAll('.nav-btn').forEach(function(b) { b.classList.remove('active'); });
  document.getElementById('view-' + name).classList.add('active');
  document.getElementById('nav-' + name).classList.add('active');
}

// ── Journal render ─────────────────────────────────────
function renderJournal() {
  var journal = loadJournal();
  var container = document.getElementById('journal-list');

  if (!journal.length) {
    container.innerHTML = '<p class="journal-empty">No reflections yet. Save today\'s to start your journal.</p>';
    return;
  }

  var html = '';
  journal.forEach(function(e) {
    var badge = '';
    if (e.rating !== null && e.rating !== undefined) {
      var classes = ['badge-red', 'badge-amber', 'badge-green'];
      badge = '<span class="entry-badge ' + classes[e.rating] + '">' + RATING_LABELS[e.rating] + '</span>';
    }
    var note = e.note ? '<p class="entry-note">"' + e.note + '"</p>' : '';
    html += '<div class="journal-entry">'
      + '<div class="entry-top">'
      + '<span class="entry-date">' + formatDate(e.date) + '</span>'
      + badge
      + '</div>'
      + '<p class="entry-other">' + e.other + '</p>'
      + '<p class="entry-auth">→ ' + e.auth + '</p>'
      + note
      + '</div>';
  });
  container.innerHTML = html;
}

// ── Export ─────────────────────────────────────────────
document.getElementById('export-btn').addEventListener('click', function() {
  var journal = loadJournal();
  if (!journal.length) {
    alert('No entries to export yet.');
    return;
  }
  var blob = new Blob([JSON.stringify(journal, null, 2)], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'authentic-living-journal.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

// ── Service Worker ─────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').catch(function(err) {
      console.log('SW registration failed:', err);
    });
  });
}
