/* 3D passport flipbook built from the Gabbu's Passport PDF pages, with page-turn sound. */
(function () {
  "use strict";
  var mount = document.getElementById("passportBook");
  if (!mount) return;

  var SPREADS = 12;
  var LEAVES = SPREADS - 1; // leaf k: front = right half of spread k, back = left half of spread k+1
  // The PDF is a printer-imposed booklet, so its l/r halves are not in reading order. Spread n shows
  // [left, right] source images in true reading order: cover, customer details, story, stamps 01-32 each
  // facing its offers page, then Terms & Conditions.
  var SPREAD_PAGES = [[1, 1], [2, 3], [4, 5], [6, 7], [8, 9], [10, 11], [12, 12], [11, 10], [9, 8], [7, 6], [5, 4], [3, 2]];
  var img = function (side, n) { return "assets/passport/" + side + SPREAD_PAGES[n - 1][side === "l" ? 0 : 1] + ".jpg"; };

  /* ---- page-turn sound: real public-domain recordings, alternated so turns do not sound looped ---- */
  var TURN_FILES = ["assets/passport/turn-1.mp3", "assets/passport/turn-2.mp3", "assets/passport/turn-3.mp3", "assets/passport/turn-4.mp3"];
  var TURN_GAIN = [0.4, 0.42, 0.6, 0.28];
  var TURN_VOLUME = 0.25;
  var audioCtx = null, turnBuffers = TURN_FILES.map(function () { return null; }), turnLoading = null, lastTurn = -1;

  function getAudio() {
    try {
      if (!audioCtx) {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        audioCtx = new AC();
      }
      if (audioCtx.state === "suspended") audioCtx.resume();
      return audioCtx;
    } catch (e) { return null; }
  }
  function loadTurnSound() {
    var ctx = getAudio();
    if (!ctx || turnLoading) return;
    turnLoading = Promise.all(TURN_FILES.map(function (url, i) {
      return fetch(url)
        .then(function (r) { return r.arrayBuffer(); })
        .then(function (data) { return new Promise(function (res, rej) { ctx.decodeAudioData(data, res, rej); }); })
        .then(function (buf) { turnBuffers[i] = buf; })
        .catch(function () {});
    }));
  }
  function playFlipSound() {
    var ctx = getAudio();
    if (!ctx) return;
    var ready = [];
    turnBuffers.forEach(function (b, i) { if (b) ready.push(i); });
    if (!ready.length) {
      loadTurnSound();
      if (turnLoading) turnLoading.then(function () { if (turnBuffers.some(Boolean)) playFlipSound(); });
      return;
    }
    var pool = ready.length > 1 ? ready.filter(function (i) { return i !== lastTurn; }) : ready;
    var pick = pool[Math.floor(Math.random() * pool.length)];
    lastTurn = pick;
    var src = ctx.createBufferSource();
    src.buffer = turnBuffers[pick];
    src.playbackRate.value = 0.96 + Math.random() * 0.12;
    var gain = ctx.createGain();
    var volume = TURN_VOLUME * TURN_GAIN[pick] * (0.9 + Math.random() * 0.2);
    var start = ctx.currentTime;
    var duration = src.buffer.duration / src.playbackRate.value;
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(volume, start + 0.015);
    gain.gain.setValueAtTime(volume, start + Math.max(0.015, duration - 0.06));
    gain.gain.linearRampToValueAtTime(0, start + duration);
    src.connect(gain);
    gain.connect(ctx.destination);
    src.onended = function () { src.disconnect(); gain.disconnect(); };
    src.start();
  }

  /* ---- markup ---- */
  mount.className = "pp-wrap";
  mount.setAttribute("aria-label", "Gabbu's Passport");
  mount.innerHTML =
    '<div class="pp-stage"><div class="pp-book" id="ppBook"><div class="pp-page pp-right" id="ppLast"></div></div></div>' +
    '<div class="pp-controls">' +
    '<button type="button" id="ppPrev" aria-label="Previous page">←</button>' +
    '<span id="ppLabel">Cover</span>' +
    '<button type="button" id="ppNext" aria-label="Next page">→</button>' +
    '<button type="button" id="ppMute" aria-label="Mute page-turn sound" title="Sound on">' +
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5z"/><g id="ppWaves"><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></g><path id="ppX" d="m16 9 5 6M21 9l-5 6" style="display:none"/></svg>' +
    '</button></div>';

  var book = document.getElementById("ppBook");
  var last = document.getElementById("ppLast");
  var label = document.getElementById("ppLabel");
  var prevBtn = document.getElementById("ppPrev");
  var nextBtn = document.getElementById("ppNext");
  var muteBtn = document.getElementById("ppMute");
  last.style.backgroundImage = "url(" + img("r", SPREADS) + ")";

  var leaves = [];
  for (var k = 1; k <= LEAVES; k++) {
    var leaf = document.createElement("div");
    leaf.className = "pp-leaf";
    leaf.style.zIndex = String(LEAVES + 1 - k);
    leaf.innerHTML = '<div class="pp-face pp-front"></div><div class="pp-face pp-back"></div>';
    leaf.firstChild.style.backgroundImage = "url(" + img("r", k) + ")";
    leaf.lastChild.style.backgroundImage = "url(" + img("l", k + 1) + ")";
    book.appendChild(leaf);
    leaves.push(leaf);
  }

  /* ---- state ---- */
  var cur = 0, muted = false, closing = null;
  try { muted = window.localStorage.getItem("gabbu-passport-muted") === "1"; } catch (e) {}

  function render() {
    book.classList.toggle("is-open", cur > 0);
    leaves.forEach(function (leaf, i) {
      var n = i + 1, flipped = n <= cur;
      leaf.classList.toggle("is-flipped", flipped);
      leaf.style.zIndex = String(flipped ? n : LEAVES + 1 - n);
      leaf.onclick = flipped ? prev : next;
    });
    var atEnd = cur === LEAVES;
    last.style.cursor = atEnd ? "pointer" : "";
    last.onclick = atEnd ? backToCover : null;
    label.textContent = cur === 0 ? "Cover" : "Page " + (cur + 1) + " / " + SPREADS;
    prevBtn.disabled = cur === 0;
    nextBtn.textContent = atEnd ? "↺" : "→";
    nextBtn.setAttribute("aria-label", atEnd ? "Back to cover" : "Next page");
  }
  function renderMute() {
    muteBtn.style.opacity = muted ? 0.55 : 1;
    muteBtn.setAttribute("aria-label", muted ? "Unmute page-turn sound" : "Mute page-turn sound");
    muteBtn.title = muted ? "Sound off" : "Sound on";
    document.getElementById("ppWaves").style.display = muted ? "none" : "";
    document.getElementById("ppX").style.display = muted ? "" : "none";
  }
  function turnTo(n) {
    var target = Math.max(0, Math.min(n, LEAVES));
    if (target === cur) return;
    cur = target;
    render();
    if (!muted) playFlipSound();
  }
  function next() { turnTo(cur + 1); }
  function prev() { turnTo(cur - 1); }
  function backToCover() {
    if (closing) return;
    loadTurnSound();
    closing = setInterval(function () {
      if (cur <= 0) { clearInterval(closing); closing = null; return; }
      turnTo(cur - 1);
    }, 140);
  }

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", function () { if (cur === LEAVES) backToCover(); else next(); });
  muteBtn.addEventListener("click", function () {
    muted = !muted;
    try { window.localStorage.setItem("gabbu-passport-muted", muted ? "1" : "0"); } catch (e) {}
    if (!muted) loadTurnSound();
    renderMute();
  });
  mount.addEventListener("contextmenu", function (e) { e.preventDefault(); });
  mount.addEventListener("dragstart", function (e) { e.preventDefault(); });

  /* arrow keys only while the book is on screen */
  var visible = false;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }, { threshold: 0.5 }).observe(mount);
  }
  window.addEventListener("keydown", function (e) {
    if (!visible) return;
    if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  });

  /* "Open Passport" button / cover: scroll to the book and turn the first leaf */
  window.openPassportBook = function () {
    loadTurnSound(); // unlock + preload audio inside the user gesture
    mount.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(function () { if (cur === 0) turnTo(1); }, 500);
  };

  render();
  renderMute();
})();
