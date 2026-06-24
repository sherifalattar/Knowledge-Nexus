/* Knowledge Nexus — shared ambient sound toggle.
   Off by default (browsers block autoplay-with-sound until a gesture).
   Once enabled, persists across pages within the session and resumes. */
(function () {
  if (window.__knAudio) return;
  window.__knAudio = true;
  var KEY = 'kn-audio';

  var audio = document.createElement('audio');
  audio.src = 'ambient.mp3';
  audio.loop = true;
  audio.preload = 'auto';
  audio.setAttribute('playsinline', '');
  audio.volume = 0;
  document.documentElement.appendChild(audio);

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Toggle ambient sound');
  btn.style.cssText = [
    'position:fixed', 'right:22px', 'bottom:22px', 'z-index:2147483000',
    'height:38px', 'padding:0 15px 0 12px', 'display:inline-flex', 'align-items:center', 'gap:8px',
    'border-radius:999px', 'cursor:pointer',
    'font:600 11px/1 ui-sans-serif,system-ui,-apple-system,sans-serif',
    'letter-spacing:.16em', 'text-transform:uppercase',
    'color:#E7C887', 'background:rgba(12,16,24,.60)',
    '-webkit-backdrop-filter:blur(10px)', 'backdrop-filter:blur(10px)',
    'border:1px solid rgba(201,168,106,.40)', 'box-shadow:0 10px 34px -14px rgba(0,0,0,.85)',
    'opacity:0', 'transition:opacity .8s ease,color .25s,border-color .25s,background .25s'
  ].join(';');
  var ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="9.5" x2="5" y2="14.5"/><line x1="10" y1="5" x2="10" y2="19"/><line x1="15" y1="8" x2="15" y2="16"/><line x1="20" y1="10.5" x2="20" y2="13.5"/></svg>';
  var label = document.createElement('span');
  label.textContent = 'Sound';
  btn.innerHTML = ICON;
  btn.appendChild(label);
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
    label.textContent = on ? 'Sound on' : 'Sound';
    btn.style.color = on ? '#2FE6C8' : '#E7C887';
    btn.style.borderColor = on ? 'rgba(47,230,200,.5)' : 'rgba(201,168,106,.40)';
  }
  function save(v) { try { sessionStorage.setItem(KEY, v); } catch (e) {} }
  function start() {
    var pr = audio.play();
    if (pr && pr.then) pr.then(function () { ui(true); fadeTo(0.42); save('on'); }).catch(function () { ui(false); });
    else { ui(true); fadeTo(0.42); save('on'); }
  }
  function stop() { fadeTo(0, function () { audio.pause(); }); ui(false); save('off'); }

  btn.addEventListener('click', function () { playing ? stop() : start(); });

  // Resume if it was on when navigating from a previous page.
  var want; try { want = sessionStorage.getItem(KEY); } catch (e) {}
  if (want === 'on') {
    var pr = audio.play();
    if (pr && pr.then) pr.then(function () { ui(true); fadeTo(0.42); }).catch(function () {
      ui(false);
      var resume = function () { start(); window.removeEventListener('pointerdown', resume); window.removeEventListener('keydown', resume); };
      window.addEventListener('pointerdown', resume, { once: true });
      window.addEventListener('keydown', resume, { once: true });
    });
  }

  // Allow the cinematic ENTER click to begin audio within its gesture.
  window.knAudioArm = function () { save('on'); start(); };
})();
