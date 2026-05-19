# Authentic Living

A daily reflection app based on Jim Warner's Contrasting Behaviours table from *Facing Pain — Embracing Love* (OnCourse International).

Each day surfaces a different behaviour pair — the pattern to notice in yourself, and the authentic alternative to move towards — with a reflection question, a self-rating, and a journal.

---

## Deploy to GitHub Pages

1. Create a new repository on GitHub (can be public or private)
2. Upload all these files, keeping the folder structure
3. Go to **Settings → Pages**
4. Under "Source" select **Deploy from a branch**, choose `main`, folder `/ (root)`
5. Save — your app will be live at `https://yourusername.github.io/your-repo-name`

### App icons

You need two icon files in the `icons/` folder:
- `icons/icon-192.png` — 192×192px
- `icons/icon-512.png` — 512×512px

A simple dark square with initials "AL" works fine. You can generate icons at https://favicon.io or use any image editor.

If you skip the icons, the app still works — you just won't get a home screen icon on iOS.

---

## Add to iPhone home screen

1. Open the app URL in Safari
2. Tap the **Share** button (box with arrow)
3. Scroll down and tap **Add to Home Screen**
4. Tap **Add**

The app will open full-screen like a native app, with no browser chrome.

---

## Using your journal

Your journal is stored locally on your device (localStorage). It persists across sessions on the same browser but won't sync to other devices.

To share your journal with Claude for a progress summary:

1. Go to the **Journal** tab
2. Tap **Export journal**
3. This downloads a `authentic-living-journal.json` file
4. Upload that file to Claude and ask for a summary

---

## Sharing with friends

Just share your GitHub Pages URL. Each person's data is completely separate — stored only on their own device. Nothing is shared or mixed.

---

## Structure

```
index.html        — main page
css/style.css     — all styles
js/data.js        — behaviour pairs and descriptions
js/app.js         — app logic
manifest.json     — PWA config
sw.js             — service worker (offline support)
icons/            — app icons (you provide these)
```

---

*Behaviours list from Jim Warner's Contrasting Behaviours table, Facing Pain — Embracing Love (OnCourse International)*
