import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/** Ambient background: particles, connection lines, blurred Lovable magenta/purple blobs and tech grid. */
export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const COLORS = [
      "rgba(255, 79, 184, 0.6)", // Lovable pink
      "rgba(146, 46, 255, 0.55)", // Lovable purple
      "rgba(57, 230, 192, 0.5)", // Lovable cyan
      "rgba(240, 43, 203, 0.55)", // Lovable magenta
    ];

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      radius: number;
    };
    let nodes: Node[] = [];

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(68, Math.floor((width * height) / 24000));
      nodes = Array.from({ length: count }, (_, idx) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        color: COLORS[idx % COLORS.length]!,
        radius: 1.2 + Math.random() * 0.8,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]!;
          const b = nodes[j]!;
          const dist = Math.hypot(a.x - b.x, a.y - b.y);

          if (dist < 140) {
            ctx.strokeStyle = `rgba(240, 43, 203, ${(1 - dist / 140) * 0.12})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = n.color;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="grid-bg absolute inset-0 opacity-50" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-60" />

      {/* Orbes atmosféricos com a paleta Lovable */}
      <div className="absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-lovable-purple/15 blur-[160px]" />
      <div className="absolute top-1/4 -right-40 h-[520px] w-[520px] rounded-full bg-lovable-pink/12 blur-[150px]" />
      <div className="absolute top-2/3 -left-40 h-[480px] w-[480px] rounded-full bg-lovable-violet/12 blur-[140px]" />
      <div className="absolute bottom-10 right-1/4 h-[420px] w-[420px] rounded-full bg-lovable-cyan/8 blur-[160px]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
