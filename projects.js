(function () {
  'use strict';

  // ── Video preview observer (pause when scrolled out of view) ─────────────
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const vid = entry.target;
        if (!entry.isIntersecting && !vid.paused) {
          vid.pause();
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.work__project-video').forEach(v => videoObserver.observe(v));
  }

  // ── Card query & diagnostic check ──────────────────────────────────────────
  const cards = Array.from(document.querySelectorAll('.work__project'));

  // Diagnostic count exposed globally and in console
  console.log(`[Projects] Initialized proximity 3D interaction on ${cards.length} project cards.`);
  window.__portfolioProjectsCount = cards.length;

  if (cards.length === 0) return;

  // ── Desktop-only guard ──────────────────────────────────────────────────────
  // On touch/mobile devices the section stays clean and tap-friendly.
  // No JS pointer listeners are bound, preventing any touch scroll/tap interference.
  const isPointerFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isPointerFine) return;

  // ── Config ──────────────────────────────────────────────────────────────────
  const PERSPECTIVE        = 1000; // px — camera distance
  const MAX_ROTATE         = 3.5;  // degrees — max tilt in any direction
  const MAX_LIFT           = 6;    // px — vertical lift on hover
  const LIFT_Z             = 10;   // px — Z depth for physical feel
  const LERP_IN            = 0.10; // interpolation speed toward cursor
  const LERP_OUT           = 0.08; // interpolation speed back to rest
  const PROXIMITY_RADIUS   = 130;  // px — proximity radius where card senses approaching cursor

  // ── Per-card state ──────────────────────────────────────────────────────────
  const cardStates = cards.map(card => ({
    card,
    video: card.querySelector('.work__project-video'),
    curRX: 0,
    curRY: 0,
    curLift: 0,
    curZ: 0,
    tgtRX: 0,
    tgtRY: 0,
    tgtLift: 0,
    tgtZ: 0,
    isHovered: false,
    isApproaching: false,
    rafId: null
  }));

  // Linear interpolation helper
  function lerp(a, b, t) { return a + (b - a) * t; }

  // RAF loop — runs per card until values settle back at rest
  function tick(state) {
    const isEngaged = state.isHovered || state.isApproaching;
    const speed = isEngaged ? LERP_IN : LERP_OUT;

    state.curRX   = lerp(state.curRX,   state.tgtRX,   speed);
    state.curRY   = lerp(state.curRY,   state.tgtRY,   speed);
    state.curLift = lerp(state.curLift, state.tgtLift, speed);
    state.curZ    = lerp(state.curZ,    state.tgtZ,    speed);

    state.card.style.transform =
      `perspective(${PERSPECTIVE}px) ` +
      `rotateX(${state.curRX.toFixed(3)}deg) ` +
      `rotateY(${state.curRY.toFixed(3)}deg) ` +
      `translateY(${(-state.curLift).toFixed(3)}px) ` +
      `translateZ(${state.curZ.toFixed(3)}px)`;

    const settled =
      !isEngaged &&
      Math.abs(state.curRX) < 0.01 &&
      Math.abs(state.curRY) < 0.01 &&
      Math.abs(state.curLift) < 0.01 &&
      Math.abs(state.curZ) < 0.01;

    if (settled) {
      state.card.style.transform = '';
      state.card.style.willChange = '';
      state.card.classList.remove('is-tilting');
      state.rafId = null;
    } else {
      state.rafId = requestAnimationFrame(() => tick(state));
    }
  }

  function startLoop(state) {
    if (!state.rafId) {
      state.card.style.willChange = 'transform';
      state.rafId = requestAnimationFrame(() => tick(state));
    }
  }

  // Video preview helpers
  function playVideo(state) {
    if (!state.video) return;
    if (state.video.currentSrc || state.video.src || state.video.querySelector('source[src]')) {
      const p = state.video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    }
  }

  function pauseVideo(state) {
    if (!state.video) return;
    if (!state.video.paused) {
      state.video.pause();
    }
  }

  // ── Card-Level Listeners (Direct Hover — Strongest Response) ───────────────
  cardStates.forEach(state => {
    state.card.addEventListener('mouseenter', e => {
      state.isHovered = true;
      state.isApproaching = false;
      state.card.classList.add('is-hovered', 'is-tilting');

      const rect = state.card.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      state.tgtRX   = -ny * MAX_ROTATE;
      state.tgtRY   =  nx * MAX_ROTATE;
      state.tgtLift = MAX_LIFT;
      state.tgtZ    = LIFT_Z;

      startLoop(state);
      playVideo(state);
    });

    state.card.addEventListener('mousemove', e => {
      state.isHovered = true;
      state.isApproaching = false;

      const rect = state.card.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      state.tgtRX   = -ny * MAX_ROTATE;
      state.tgtRY   =  nx * MAX_ROTATE;
      state.tgtLift = MAX_LIFT;
      state.tgtZ    = LIFT_Z;

      startLoop(state);
    });

    state.card.addEventListener('mouseleave', () => {
      state.isHovered = false;
      state.card.classList.remove('is-hovered');
      pauseVideo(state);

      // Will be picked up by global pointermove if still within proximity
      state.tgtRX   = 0;
      state.tgtRY   = 0;
      state.tgtLift = 0;
      state.tgtZ    = 0;
      startLoop(state);
    });
  });

  // ── Global Pointer Move Listener (Approaching Proximity) ───────────────────
  function onGlobalPointerMove(e) {
    const clientX = e.clientX;
    const clientY = e.clientY;

    for (let i = 0; i < cardStates.length; i++) {
      const state = cardStates[i];

      // If directly hovered, the card-level mousemove already owns the target
      if (state.isHovered) continue;

      const rect = state.card.getBoundingClientRect();

      // Shortest distance to card bounding box
      const dx = Math.max(rect.left - clientX, 0, clientX - rect.right);
      const dy = Math.max(rect.top - clientY, 0, clientY - rect.bottom);
      const dist = Math.hypot(dx, dy);

      if (dist === 0) {
        // Fallback: cursor is inside but mouseenter didn't fire yet
        state.isHovered = true;
        state.isApproaching = false;
        state.card.classList.add('is-hovered', 'is-tilting');

        const nx = ((clientX - rect.left) / rect.width - 0.5) * 2;
        const ny = ((clientY - rect.top) / rect.height - 0.5) * 2;

        state.tgtRX   = -ny * MAX_ROTATE;
        state.tgtRY   =  nx * MAX_ROTATE;
        state.tgtLift = MAX_LIFT;
        state.tgtZ    = LIFT_Z;

        startLoop(state);
        playVideo(state);

      } else if (dist < PROXIMITY_RADIUS) {
        // Approaching proximity zone (cursor near card)
        state.isApproaching = true;
        state.card.classList.add('is-tilting');

        // Smooth cubic falloff as cursor approaches perimeter
        const factor = Math.pow(1 - (dist / PROXIMITY_RADIUS), 1.25);

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dirX = Math.max(-1.5, Math.min(1.5, (clientX - centerX) / (rect.width / 2)));
        const dirY = Math.max(-1.5, Math.min(1.5, (clientY - centerY) / (rect.height / 2)));

        state.tgtRX   = -dirY * MAX_ROTATE * factor;
        state.tgtRY   =  dirX * MAX_ROTATE * factor;
        state.tgtLift = MAX_LIFT * factor * 0.6;
        state.tgtZ    = LIFT_Z * factor * 0.6;

        startLoop(state);

      } else {
        // Outside proximity
        if (state.isApproaching) {
          state.isApproaching = false;
          state.tgtRX   = 0;
          state.tgtRY   = 0;
          state.tgtLift = 0;
          state.tgtZ    = 0;
          startLoop(state);
        }
      }
    }
  }

  window.addEventListener('pointermove', onGlobalPointerMove, { passive: true });

  // When cursor leaves the window, settle all cards back to resting state
  document.addEventListener('mouseleave', () => {
    for (let i = 0; i < cardStates.length; i++) {
      const state = cardStates[i];
      state.isHovered = false;
      state.isApproaching = false;
      state.card.classList.remove('is-hovered');
      state.tgtRX   = 0;
      state.tgtRY   = 0;
      state.tgtLift = 0;
      state.tgtZ    = 0;
      startLoop(state);
      pauseVideo(state);
    }
  });

})();
