import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  anchorX: number;
  anchorY: number;
  anchorVx: number;
  anchorVy: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef<{ x: number | null, y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    };

    const handleMouseMove = (event: MouseEvent) => {
        mouse.current.x = event.clientX;
        mouse.current.y = event.clientY;
    };

    const handleMouseOut = () => {
        mouse.current.x = null;
        mouse.current.y = null;
    }

    const initParticles = () => {
        particles = [];
        const numParticles = Math.floor(canvas.width * canvas.height / 2500);
        for (let i = 0; i < numParticles; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            particles.push({
                x: x,
                y: y,
                vx: 0,
                vy: 0,
                radius: Math.random() * 1.5 + 0.5,
                anchorX: x,
                anchorY: y,
                anchorVx: Math.random() * 0.8 - 0.4,
                anchorVy: Math.random() * 0.8 - 0.4,
            });
        }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const accentColor = '56, 189, 248'; // sky-400
      const MOUSE_RADIUS = 150;
      const SPRING_STRENGTH = 0.01;
      const DAMPING = 0.95;
      const MOUSE_PULL_STRENGTH = 0.4;

      particles.forEach(p => {
        // Move anchor point
        p.anchorX += p.anchorVx;
        p.anchorY += p.anchorVy;

        // Anchor bounces off walls
        if (p.anchorX - p.radius < 0 || p.anchorX + p.radius > canvas.width) {
            p.anchorVx *= -1;
        }
        if (p.anchorY - p.radius < 0 || p.anchorY + p.radius > canvas.height) {
            p.anchorVy *= -1;
        }

        // Spring force pulling particle towards its anchor
        const dxSpring = p.anchorX - p.x;
        const dySpring = p.anchorY - p.y;
        p.vx += dxSpring * SPRING_STRENGTH;
        p.vy += dySpring * SPRING_STRENGTH;

        // Mouse interaction force
        if (mouse.current.x !== null && mouse.current.y !== null) {
            const dxMouse = mouse.current.x - p.x;
            const dyMouse = mouse.current.y - p.y;
            const dist = Math.hypot(dxMouse, dyMouse);

            if (dist < MOUSE_RADIUS) {
                const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                // This force should be strong enough to pull the particle away from its anchor
                p.vx += (dxMouse / dist) * force * MOUSE_PULL_STRENGTH;
                p.vy += (dyMouse / dist) * force * MOUSE_PULL_STRENGTH;
            }
        }

        // Apply damping to simulate friction
        p.vx *= DAMPING;
        p.vy *= DAMPING;
        
        // Update particle's actual position
        p.x += p.vx;
        p.y += p.vy;

        // Draw the particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentColor}, 0.9)`;
        ctx.fill();
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${accentColor}, ${0.8 - dist / 120})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    
    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default ParticleBackground;