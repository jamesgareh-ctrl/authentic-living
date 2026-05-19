var PAIRS = [
  {
    other: "Blaming and complaining",
    otherDesc: "Finding fault in others, circumstances or bad luck. Narrating what isn't working without taking ownership. Complaining as a substitute for action.",
    auth: "Taking healthy responsibility for my life",
    authDesc: "Owning not just what happened but your part in it. The shift from narrating what's wrong to deciding what you will do differently. Not self-blame — ownership.",
    q: "Have you found yourself narrating what's going wrong rather than asking what you could do differently?"
  },
  {
    other: "Concealing",
    otherDesc: "Keeping your real experience, fears, doubts and struggles hidden — editing the version of yourself you offer even to people you trust.",
    auth: "Candor and revealing",
    authDesc: "Choosing to let the truth of your experience be visible to those who need to see it. Rooted in the wish to be known rather than the need to appear together.",
    q: "Have you held something back today to manage how you appear — rather than letting someone actually know you?"
  },
  {
    other: "Maintaining a façade around feelings",
    otherDesc: "Resisting or bypassing what you actually feel. Moving to action or analysis before anything uncomfortable can surface. Performing composure — for yourself as much as others.",
    auth: "Experiencing all feelings",
    authDesc: "Allowing yourself to actually feel what's present. The willingness to know and welcome your own emotional state before deciding what to do with it.",
    q: "Have you moved to action or analysis today to avoid sitting with something uncomfortable?"
  },
  {
    other: "Measurement and entitlement",
    otherDesc: "Keeping score. Measuring yourself against others and where you think you should be by now. The quiet belief that your efforts entitle you to certain outcomes.",
    auth: "Sufficiency and gratitude",
    authDesc: "A genuine recognition of what you have rather than a running audit of what you don't. A settled belief that enough is enough.",
    q: "Have you been keeping score today — measuring what you deserve against what you've received?"
  },
  {
    other: "Defensiveness and control",
    otherDesc: "The need to manage outcomes and be in control. Finding it hard to hear feedback without explaining or justifying yourself. The habit of being right rather than being curious.",
    auth: "Curiosity and collaboration",
    authDesc: "Approaching conversations to learn rather than to confirm. Staying open to the real possibility that your version of events is incomplete — and that you might be wrong.",
    q: "Have you found yourself justifying, explaining, or steering a conversation rather than genuinely listening?"
  },
  {
    other: "Withdrawal and indifference",
    otherDesc: "Checking out. Going through the motions without really being present. The protective distance that looks like calm but is actually disconnection.",
    auth: "Participation and courage",
    authDesc: "Showing up fully, even when it's uncomfortable. Choosing genuine engagement over the safety of staying at a distance.",
    q: "Have you been physically present but emotionally checked out — going through the motions?"
  },
  {
    other: "Comparing and seeking power",
    otherDesc: "Positioning yourself relative to others. Sizing up who has more, who has less, who's winning. Using influence or status to feel secure rather than to genuinely serve.",
    auth: "Equanimity and empowerment",
    authDesc: "A settled sense of your own worth that doesn't depend on where you sit in the pecking order. Using your influence to lift others rather than confirm your own position.",
    q: "Have you caught yourself sizing others up — or making a move to establish your position?"
  },
  {
    other: "Rescuing and caretaking",
    otherDesc: "Solving other people's problems before they've asked you to. Stepping in, fixing, advising, taking over. Often about your own discomfort with their struggle, or your need to be needed.",
    auth: "Caring and compassion",
    authDesc: "Being genuinely present with someone in difficulty without needing to fix it. Caring that serves them rather than relieves you — staying with the problem rather than solving it.",
    q: "Have you stepped in to fix or advise someone today when what they needed was simply to be heard?"
  },
  {
    other: "Being right",
    otherDesc: "The need to win the argument or have your view validated. Protecting your position rather than genuinely engaging with another perspective. Sitting with uncertainty feels threatening.",
    auth: "Learning, being present and paying attention",
    authDesc: "Approaching conversations to learn rather than to win. Letting go of the need to have the answer. Being willing to be changed by what you hear.",
    q: "Have you held a position today more to avoid being wrong than because you'd genuinely thought it through?"
  },
  {
    other: "Being smart or clever",
    otherDesc: "Using intelligence as a defence. Analysing, intellectualising or reframing as a way of staying in your head and out of your feelings. The habit of being the most sophisticated person rather than the most honest one.",
    auth: "Seeking knowledge and wisdom",
    authDesc: "Seeing others as an opportunity to learn and grow rather than to tell and teach. A genuine desire to deepen your understanding rather than confirm what you already know.",
    q: "Have you used analysis or reframing today to stay comfortable — rather than to get to the truth?"
  },
  {
    other: "Seeking achievement and accumulation",
    otherDesc: "Hitting the next target, accumulating more, building towards goals that keep shifting. The treadmill of more that promises satisfaction but keeps moving the finish line.",
    auth: "Joyful service and stewardship",
    authDesc: "Using what you have and what you've built in service of something beyond yourself. The shift from accumulation to contribution.",
    q: "Have you been chasing a result or acquisition today for what it signals — rather than what it genuinely means?"
  },
  {
    other: "Seeking notoriety",
    otherDesc: "The need to be seen, recognised and talked about. Filtering opportunities and relationships through what they could do for your reputation. The hunger for acknowledgement that never quite gets satisfied.",
    auth: "Presence",
    authDesc: "Being fully here, in this conversation, with these people — without filtering it through what it might do for you. Giving your attention without an agenda.",
    q: "Have you shaped how you showed up today around how it would look — rather than what was actually needed?"
  },
  {
    other: "Finding the easy way",
    otherDesc: "Defaulting to the path of least resistance. Avoiding the difficult conversation, the uncomfortable decision, the thing that needs doing but costs something. The gap between what you know is right and what you actually do.",
    auth: "Discipline to do the hard thing",
    authDesc: "The willingness to act on what you know is true even when it's uncomfortable, inconvenient or costly. Choosing integrity over ease.",
    q: "Have you avoided a conversation, decision or action today that you know you shouldn't have?"
  },
  {
    other: "Resentment and vengeance",
    otherDesc: "Holding on to grievances, real or imagined. The quiet score-keeping of wrongs done to you. The satisfaction of being the injured party. Staying stuck in what happened rather than choosing what comes next.",
    auth: "Forgiveness, compassion and boundaries",
    authDesc: "Letting go of grievances not because what happened didn't matter, but because you recognise what carrying them costs you. Compassion alongside clear boundaries about what you will and won't accept.",
    q: "Have you been replaying a grievance or nursing a sense of injustice rather than choosing what comes next?"
  }
];

var RATING_LABELS = ["Struggling", "In between", "Living well"];
