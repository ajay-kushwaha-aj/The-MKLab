import { useEffect, useRef } from "react";

const COMPLEMENT = { A: "U", U: "A", C: "G", G: "C" };
const BASE_SEQ = "AUGCCGAUUAGCUGACUAGGAUCCUAGUCGAAUGCUAG";

function buildPairStream(offset, length = 38) {
  return Array.from({ length }, (_, i) => {
    const top = BASE_SEQ[(i + offset) % BASE_SEQ.length];
    return { top, bottom: COMPLEMENT[top] };
  });
}

function baseColor(base, alpha) {
  if (base === "A" || base === "U") {
    return `rgba(242, 109, 91, ${alpha.toFixed(3)})`;
  }
  return `rgba(34, 184, 181, ${alpha.toFixed(3)})`;
}

export default function NetworkCanvas({ compact = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let safeZones = [];
    let rafId = null;
    let time = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    const horizontalStreams = compact
      ? [
          { yMode: "top", yOffset: 16, dir: 1, speed: 0.42, amp: 4, freq: 0.018, seq: buildPairStream(0, 44) },
          { yMode: "bottom", yOffset: 16, dir: -1, speed: 0.42, amp: 4, freq: 0.018, seq: buildPairStream(11, 44) },
        ]
      : [
          { yMode: "top", yOffset: 24, dir: 1, speed: 0.44, amp: 5, freq: 0.018, seq: buildPairStream(0, 44) },
          { yMode: "top", yOffset: 62, dir: -1, speed: 0.34, amp: 4, freq: 0.015, seq: buildPairStream(8, 44) },
          { yMode: "bottom", yOffset: 62, dir: 1, speed: 0.34, amp: 4, freq: 0.015, seq: buildPairStream(21, 44) },
          { yMode: "bottom", yOffset: 24, dir: -1, speed: 0.44, amp: 5, freq: 0.018, seq: buildPairStream(11, 44) },
        ];

    const rightZoneStreams = compact
      ? [
          { yRatio: 0.34, dir: -1, speed: 0.48, amp: 9, freq: 0.022, seq: buildPairStream(4, 34) },
          { yRatio: 0.68, dir: 1, speed: 0.38, amp: 9, freq: 0.02, seq: buildPairStream(17, 34) },
        ]
      : [
          { yRatio: 0.25, dir: 1, speed: 0.36, amp: 10, freq: 0.02, seq: buildPairStream(7, 36) },
          { yRatio: 0.52, dir: -1, speed: 0.44, amp: 10, freq: 0.022, seq: buildPairStream(19, 36) },
          { yRatio: 0.78, dir: 1, speed: 0.32, amp: 9, freq: 0.018, seq: buildPairStream(29, 36) },
        ];

    function measureSafeZones() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const parentRect = parent.getBoundingClientRect();
      const zones = [];

      const marked = parent.querySelectorAll("[data-canvas-safe]");
      if (marked.length > 0) {
        marked.forEach((el) => {
          const r = el.getBoundingClientRect();
          zones.push({
            left: r.left - parentRect.left - 24,
            top: r.top - parentRect.top - 12,
            right: r.right - parentRect.left + 24,
            bottom: r.bottom - parentRect.top + 12,
          });
        });
      } else {
        // Auto-detect heading/text elements in compact section headers
        const textNodes = parent.querySelectorAll("h1, h2, p, .font-mono-tech");
        if (textNodes.length > 0) {
          let minL = Infinity;
          let minT = Infinity;
          let maxR = -Infinity;
          let maxB = -Infinity;
          textNodes.forEach((el) => {
            const r = el.getBoundingClientRect();
            if (r.width === 0 || r.height === 0) return;
            minL = Math.min(minL, r.left - parentRect.left);
            minT = Math.min(minT, r.top - parentRect.top);
            maxR = Math.max(maxR, r.right - parentRect.left);
            maxB = Math.max(maxB, r.bottom - parentRect.top);
          });
          if (minL < Infinity) {
            zones.push({
              left: minL - 24,
              top: minT - 12,
              right: maxR + 28,
              bottom: maxB + 12,
            });
          }
        }
      }
      safeZones = zones;
    }

    function setup() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      measureSafeZones();
    }

    // Returns 0 inside any text/card safe zone, feathering smoothly to 1 in open vacant regions
    function vacantAlphaAt(x, y) {
      let minScale = 1;
      const feather = 26;
      for (const z of safeZones) {
        if (x >= z.left && x <= z.right && y >= z.top && y <= z.bottom) {
          return 0;
        }
        const dx = Math.max(z.left - x, 0, x - z.right);
        const dy = Math.max(z.top - y, 0, y - z.bottom);
        const dist = Math.hypot(dx, dy);
        if (dist < feather) {
          minScale = Math.min(minScale, dist / feather);
        }
      }
      return minScale;
    }

    function drawRnaTrail({ xStart, xEnd, baseY, amp, freq, dir, speed, seq, halfGap, fontSize, trailWidth }) {
      const span = xEnd - xStart;
      if (span < 60) return;
      const step = fontSize <= 10 ? 22 : 26;
      const count = Math.ceil(span / step) + 2;
      const travel = prefersReduced ? 0 : time * speed * dir;
      const wrapOffset = ((travel % step) + step) % step;
      const shiftIndex = Math.floor(travel / step);

      // Moving highlight trail head cycling continuously across span
      const headCycle = prefersReduced
        ? xStart + span * 0.5
        : xStart + ((((time * speed * 1.65) % (span + trailWidth)) + (span + trailWidth)) % (span + trailWidth)) - (dir < 0 ? 0 : trailWidth * 0.5);
      const activeHeadX = dir >= 0 ? headCycle : xEnd - (headCycle - xStart);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `500 ${fontSize}px "IBM Plex Mono", monospace`;

      // Draw subtle backbone curves segmented smoothly in vacant space
      for (const sign of [-1, 1]) {
        ctx.beginPath();
        let drawing = false;
        for (let sx = xStart; sx <= xEnd; sx += 10) {
          const sy = baseY + sign * halfGap + Math.sin(sx * freq + time * 0.025 * dir) * amp;
          const v = vacantAlphaAt(sx, sy);
          if (v > 0.15) {
            if (!drawing) {
              ctx.moveTo(sx, sy);
              drawing = true;
            } else {
              ctx.lineTo(sx, sy);
            }
          } else {
            drawing = false;
          }
        }
        ctx.strokeStyle = "rgba(160, 171, 192, 0.11)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw individual AUCG complementary base pairs along the moving ribbon
      for (let i = -1; i < count; i++) {
        const px = xStart + i * step + wrapOffset;
        if (px < xStart - 8 || px > xEnd + 8) continue;

        const wave = Math.sin(px * freq + time * 0.025 * dir) * amp;
        const yTop = baseY - halfGap + wave;
        const yBot = baseY + halfGap + wave;

        const vis = Math.min(vacantAlphaAt(px, yTop), vacantAlphaAt(px, yBot));
        if (vis <= 0.03) continue;

        const seqIdx = (((i - shiftIndex) % seq.length) + seq.length) % seq.length;
        const pair = seq[seqIdx];

        // Distance behind trail head (continuous flowing luminosity trail)
        const distBehind = dir >= 0 ? activeHeadX - px : px - activeHeadX;
        let trailGlow = 0.22;
        if (distBehind >= 0 && distBehind < trailWidth) {
          trailGlow = 0.22 + (1 - distBehind / trailWidth) * 0.68;
        } else if (distBehind < 0 && distBehind > -26) {
          trailGlow = 0.22 + (1 + distBehind / 26) * 0.68;
        }

        // Interactive hover glow near pointer in vacant zones
        let hoverBoost = 0;
        if (mouse.active) {
          const md = Math.hypot(mouse.x - px, mouse.y - (yTop + yBot) * 0.5);
          if (md < 65) hoverBoost = (1 - md / 65) * 0.35;
        }

        const alpha = Math.min(0.95, (trailGlow + hoverBoost) * vis);
        const bondAlpha = alpha * 0.45;

        // Complementary H-bond rung (2 dashed lines for A-U, 3-step accent for G-C)
        const isAU = pair.top === "A" || pair.top === "U";
        ctx.strokeStyle = isAU
          ? `rgba(242, 109, 91, ${bondAlpha.toFixed(3)})`
          : `rgba(34, 184, 181, ${bondAlpha.toFixed(3)})`;
        ctx.lineWidth = isAU ? 1 : 1.3;
        ctx.beginPath();
        ctx.moveTo(px, yTop + fontSize * 0.55);
        ctx.lineTo(px, yBot - fontSize * 0.55);
        ctx.stroke();

        // Top nucleotide
        ctx.fillStyle = baseColor(pair.top, alpha);
        ctx.fillText(pair.top, px, yTop);

        // Bottom complementary nucleotide
        ctx.fillStyle = baseColor(pair.bottom, alpha * 0.88);
        ctx.fillText(pair.bottom, px, yBot);
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      if (!prefersReduced) time += 1;

      // Subtle architectural grid (static, clean behind text)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 64) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 1) Top & Bottom vacant border & corner trails (cleanly excluded from safeZones)
      for (const st of horizontalStreams) {
        const baseY = st.yMode === "top" ? st.yOffset : height - st.yOffset;
        drawRnaTrail({
          xStart: 16,
          xEnd: width - 16,
          baseY,
          amp: st.amp,
          freq: st.freq,
          dir: st.dir,
          speed: st.speed,
          seq: st.seq,
          halfGap: compact ? 8 : 9,
          fontSize: 10,
          trailWidth: 260,
        });
      }

      // 2) Vacant right-side corridor trails (active on compact page banners & open hero margins)
      const rightEdgeStart = safeZones.length ? Math.max(...safeZones.map((z) => z.right)) + 12 : width * 0.6;
      const openRightWidth = width - rightEdgeStart;
      if (openRightWidth > 120) {
        for (const st of rightZoneStreams) {
          drawRnaTrail({
            xStart: rightEdgeStart,
            xEnd: width - 16,
            baseY: height * st.yRatio,
            amp: st.amp,
            freq: st.freq,
            dir: st.dir,
            speed: st.speed,
            seq: st.seq,
            halfGap: compact ? 11 : 13,
            fontSize: 11,
            trailWidth: 240,
          });
        }
      }

      // 3) Outer left vacant corridor on ultra-wide screens
      const leftEdgeEnd = safeZones.length ? Math.min(...safeZones.map((z) => z.left)) - 12 : 0;
      if (leftEdgeEnd > 110) {
        drawRnaTrail({
          xStart: 16,
          xEnd: leftEdgeEnd,
          baseY: height * 0.5,
          amp: 9,
          freq: 0.02,
          dir: 1,
          speed: 0.38,
          seq: rightZoneStreams[0].seq,
          halfGap: 12,
          fontSize: 11,
          trailWidth: 180,
        });
      }

      if (!prefersReduced) rafId = requestAnimationFrame(draw);
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    }
    function onLeave() {
      mouse.active = false;
    }

    let ro = null;
    if ("ResizeObserver" in window && canvas.parentElement) {
      ro = new ResizeObserver(setup);
      ro.observe(canvas.parentElement);
    }

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", setup);

    setup();
    draw();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (ro) ro.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", setup);
    };
  }, [compact]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full block" aria-hidden="true" />;
}
