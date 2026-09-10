/* Knowledge Nexus — shared background music.
   Off by default (browsers block autoplay-with-sound until a gesture).
   Once enabled, the track and its position persist across pages, so navigating
   never restarts the music.

   Five pieces, about sixty-one minutes. They are NOT preloaded: together they
   are ~41 MB, and a visitor on mobile data should never pay for a minute they
   do not hear. Only the track being played is fetched, and the next one is not
   touched until the current one ends. */
(function () {
  if (window.__knAudio) return;
  window.__knAudio = true;
  // Enforce a single toggle even if a page ever hardcodes its own button.
  if (document.querySelector('[data-kn-audio]')) return;

  var KEY = 'kn-audio', K_TRACK = 'kn-track', K_POS = 'kn-pos';

  /* Filenames are case-sensitive on GitHub Pages — these match the repository. */
  var TRACKS = [
    'background-music.mp3',
    'Background-music-2.mp3',
    'Background-music-3.mp3',
    'Background-music-4.mp3',
    'Background-music-5.mp3'
  ];

  function readInt(k, fallback) {
    var v; try { v = sessionStorage.getItem(k); } catch (e) {}
    v = parseInt(v, 10);
    return isNaN(v) ? fallback : v;
  }
  function save(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }

  /* Resume the track you were on; otherwise open on a different piece each
     session, so a library behaves like one rather than like a fixed sequence. */
  var idx = readInt(K_TRACK, -1);
  var resumeAt = 0;
  if (idx >= 0 && idx < TRACKS.length) resumeAt = Math.max(0, readInt(K_POS, 0));
  else idx = Math.floor(Math.random() * TRACKS.length);

  var audio = document.createElement('audio');
  audio.preload = 'none';          /* nothing is fetched until Sound is pressed */
  audio.loop = false;              /* the playlist loops, not the track */
  audio.setAttribute('playsinline', '');
  audio.volume = 0;
  audio.src = TRACKS[idx];
  document.documentElement.appendChild(audio);

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.setAttribute('data-kn-audio', '');
  btn.setAttribute('aria-label', 'Toggle background music');
  btn.style.cssText = [
    // Sits above the identity badge row (ORCID right, LinkedIn left), which
    // occupies the bottom 14-52px band. 22px there put this pill beside the
    // ORCID badge on pages that reserved room for it, and underneath it on the
    // two that did not. 70px clears the row on every page.
    'position:fixed', 'right:22px', 'bottom:70px', 'z-index:2147483000',
    'height:38px', 'padding:0 6px 0 12px', 'display:inline-flex', 'align-items:center', 'gap:8px',
    'border-radius:999px', 'cursor:pointer',
    'font:600 11px/1 ui-sans-serif,system-ui,-apple-system,sans-serif',
    'letter-spacing:.16em', 'text-transform:uppercase',
    'color:#E7C887', 'background:rgba(12,16,24,.60)',
    '-webkit-backdrop-filter:blur(10px)', 'backdrop-filter:blur(10px)',
    'border:1px solid rgba(201,168,106,.40)', 'box-shadow:0 10px 34px -14px rgba(0,0,0,.85)',
    'opacity:0', 'transition:opacity .8s ease,color .25s,border-color .25s,background .25s'
  ].join(';');
  var ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="9.5" x2="5" y2="14.5"/><line x1="10" y1="5" x2="10" y2="19"/><line x1="15" y1="8" x2="15" y2="16"/><line x1="20" y1="10.5" x2="20" y2="13.5"/></svg>';
  btn.innerHTML = ICON;

  var label = document.createElement('span');
  label.textContent = 'Sound';
  btn.appendChild(label);

  /* Skip: a library you cannot move through is a loop with extra steps. Hidden
     until the sound is actually on, so the resting pill stays a single word. */
  var skip = document.createElement('span');
  skip.setAttribute('role', 'button');
  skip.setAttribute('tabindex', '0');
  skip.setAttribute('aria-label', 'Next piece');
  skip.textContent = '›';
  skip.style.cssText = [
    'display:none', 'width:24px', 'height:24px', 'margin-left:2px',
    'align-items:center', 'justify-content:center', 'border-radius:50%',
    'font:400 15px/1 ui-sans-serif,system-ui,sans-serif', 'letter-spacing:0',
    'color:inherit', 'opacity:.72', 'transition:opacity .2s,background .2s'
  ].join(';');
  skip.addEventListener('mouseenter', function () { skip.style.opacity = '1'; skip.style.background = 'rgba(255,255,255,.10)'; });
  skip.addEventListener('mouseleave', function () { skip.style.opacity = '.72'; skip.style.background = 'transparent'; });
  btn.appendChild(skip);

  function mount() { document.documentElement.appendChild(btn); setTimeout(function(){ btn.style.opacity = '1'; }, 1100); }
  mount();
  // Re-attach if a framework (e.g. React mounting into <body>) reconciles the DOM.
  var guard = 0, gi = setInterval(function () {
    guard++;
    if (!btn.isConnected) document.documentElement.appendChild(btn);
    if (!audio.isConnected) document.documentElement.appendChild(audio);
    if (guard > 12) clearInterval(gi);
  }, 600);

  var playing = false, fade = null;
  function fadeTo(t, done) {
    clearInterval(fade);
    fade = setInterval(function () {
      var d = t - audio.volume;
      if (Math.abs(d) < 0.03) { audio.volume = Math.max(0, Math.min(1, t)); clearInterval(fade); if (done) done(); }
      else audio.volume = Math.max(0, Math.min(1, audio.volume + d * 0.12));
    }, 40);
  }
  function ui(on) {
    playing = on;
    label.textContent = on ? (idx + 1) + ' / ' + TRACKS.length : 'Sound';
    skip.style.display = on ? 'inline-flex' : 'none';
    btn.style.paddingRight = on ? '6px' : '15px';
    btn.style.color = on ? '#2FE6C8' : '#E7C887';
    btn.style.borderColor = on ? 'rgba(47,230,200,.5)' : 'rgba(201,168,106,.40)';
    btn.setAttribute('aria-label', on
      ? 'Background music playing, piece ' + (idx + 1) + ' of ' + TRACKS.length + '. Press to stop.'
      : 'Play background music');
  }

  function remember() {
    save(K_TRACK, idx);
    save(K_POS, Math.floor(audio.currentTime || 0));
  }
  setInterval(function () { if (playing) remember(); }, 4000);
  window.addEventListener('pagehide', remember);
  document.addEventListener('visibilitychange', function () { if (document.hidden) remember(); });

  /* Seeking before playback is unreliable: currentTime set on an element that has
     not started can be ignored or reset when the media actually loads, which is why
     resuming after a blocked autoplay silently began the piece again from zero.
     So the position is applied once playback is really running, and only cleared
     when it has actually taken. */
  function applyResume() {
    if (resumeAt <= 0) return;
    if (audio.readyState < 1) return;
    try { audio.currentTime = resumeAt; } catch (e) { return; }
    if (Math.abs(audio.currentTime - resumeAt) < 1.5) resumeAt = 0;
  }
  function play() {
    var ok = function () {
      applyResume();
      if (resumeAt > 0) audio.addEventListener('canplay', applyResume, { once: true });
      ui(true); fadeTo(0.42); save(KEY, 'on');
    };
    var pr = audio.play();
    if (pr && pr.then) return pr.then(ok);
    ok();
    return Promise.resolve();
  }
  function start() {
    audio.preload = 'auto';
    play().catch(function () { ui(false); });
  }
  function stop() { remember(); fadeTo(0, function () { audio.pause(); }); ui(false); save(KEY, 'off'); }

  function goTo(n, keepPlaying) {
    idx = (n + TRACKS.length) % TRACKS.length;
    resumeAt = 0;
    save(K_TRACK, idx); save(K_POS, 0);
    audio.src = TRACKS[idx];          /* the next file is fetched only now */
    audio.preload = 'auto';
    if (keepPlaying) { audio.volume = 0; play().catch(function () { ui(false); }); }
    else ui(playing);
  }
  /* one ends, the next begins; the last returns to the first */
  audio.addEventListener('ended', function () { goTo(idx + 1, true); });

  btn.addEventListener('click', function (ev) {
    if (ev.target === skip || skip.contains(ev.target)) { ev.stopPropagation(); goTo(idx + 1, playing); return; }
    playing ? stop() : start();
  });
  skip.addEventListener('keydown', function (ev) {
    if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); ev.stopPropagation(); goTo(idx + 1, playing); }
  });

  // Resume if it was on when navigating from a previous page.
  var want; try { want = sessionStorage.getItem(KEY); } catch (e) {}
  if (want === 'on') {
    audio.preload = 'auto';
    play().catch(function () {
      ui(false);
      var resume = function () { start(); window.removeEventListener('pointerdown', resume); window.removeEventListener('keydown', resume); };
      window.addEventListener('pointerdown', resume, { once: true });
      window.addEventListener('keydown', resume, { once: true });
    });
  }

  // Allow the cinematic ENTER click to begin audio within its gesture.
  window.knAudioArm = function () { save(KEY, 'on'); start(); };
})();
