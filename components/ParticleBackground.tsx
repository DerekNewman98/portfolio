import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  depth: number;
  drift: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let raf = 0;

    const makeParticles = () => {
      const count = Math.max(80, Math.floor((window.innerWidth * window.innerHeight) / 21000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        depth: Math.random(),
        drift: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      makeParticles();
    };

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const gradient = ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.018)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.008)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0.022)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((particle) => {
        particle.drift += 0.01 * (0.4 + particle.depth);
        particle.x += particle.vx * (0.6 + particle.depth);
        particle.y += particle.vy * (0.6 + particle.depth) + Math.sin(particle.drift) * 0.08;

        if (mouseRef.current) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140 && dist > 0) {
            particle.x -= (dx / dist) * 0.5;
            particle.y -= (dy / dist) * 0.5;
          }
        }

        if (particle.x < -40) particle.x = window.innerWidth + 40;
        if (particle.x > window.innerWidth + 40) particle.x = -40;
        if (particle.y < -40) particle.y = window.innerHeight + 40;
        if (particle.y > window.innerHeight + 40) particle.y = -40;

        const radius = 1.15 + particle.depth * 1.75;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.28 + particle.depth * 0.24})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i += 1) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 152) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.14 - dist / 2550})`;
            ctx.lineWidth = p1.depth > 0.7 || p2.depth > 0.7 ? 1.08 : 0.72;
            ctx.stroke();
          }
        }
      }

      raf = window.requestAnimationFrame(render);
    };

    const handlePointer = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const clearPointer = () => {
      mouseRef.current = null;
    };

    resize();
    render();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handlePointer);
    window.addEventListener("mouseleave", clearPointer);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handlePointer);
      window.removeEventListener("mouseleave", clearPointer);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient-layer ambient-canvas" aria-hidden="true" />;
};

export default ParticleBackground;
