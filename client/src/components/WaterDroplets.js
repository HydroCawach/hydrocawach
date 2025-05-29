import React, { useEffect, useRef } from 'react';

const WaterDroplets = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const dropletsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create droplet class
    class Droplet {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isLarge = Math.random() < 0.2;
        this.size = this.isLarge 
          ? Math.random() * 4 + 4
          : Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * (this.isLarge ? 0.8 : 1);
        this.speedY = (Math.random() - 0.5) * (this.isLarge ? 0.8 : 1);
        this.baseOpacity = this.isLarge
          ? Math.random() * 0.2 + 0.4  // Base opacity for large: 0.4-0.6
          : Math.random() * 0.15 + 0.25; // Base opacity for small: 0.25-0.4
        this.opacity = this.baseOpacity;
        this.originalOpacity = this.baseOpacity;
      }

      update() {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Normal movement when far from cursor
        this.x += this.speedX;
        this.y += this.speedY;

        // React to cursor when nearby
        if (distance < 150) {
          const force = this.isLarge ? 0.02 : 0.03;
          this.x -= dx * force;
          this.y -= dy * force;
          // Increase opacity when near cursor
          this.opacity = Math.min(this.originalOpacity * 1.5, this.opacity + 0.01);
        } else {
          // Gradually return to base opacity
          this.opacity = Math.max(this.baseOpacity, this.opacity - 0.005);
        }

        // Bounce off edges with position correction
        if (this.x < 0) {
          this.x = 0;
          this.speedX *= -1;
        } else if (this.x > canvas.width) {
          this.x = canvas.width;
          this.speedX *= -1;
        }
        if (this.y < 0) {
          this.y = 0;
          this.speedY *= -1;
        } else if (this.y > canvas.height) {
          this.y = canvas.height;
          this.speedY *= -1;
        }

        // Keep droplets within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 64, 175, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create initial droplets
    const createDroplets = () => {
      dropletsRef.current = [];
      const dropletCount = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < dropletCount; i++) {
        dropletsRef.current.push(
          new Droplet(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }
    };
    createDroplets();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      dropletsRef.current.forEach(droplet => {
        droplet.update();
        droplet.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default WaterDroplets; 