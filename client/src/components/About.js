import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './about.css';

const About = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const videoRef = useRef(null); // Reference for the video
  const ripples = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let lastRippleTime = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ripples.current = ripples.current.filter(r => r.alpha > 0);

      ripples.current.forEach(ripple => {
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);

        // Use translucent white for a subtle, ghostly ripple
        ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.alpha})`;
        ctx.lineWidth = 1.5; // thinner lines for subtlety
        ctx.stroke();

        ripple.radius += 0.1; // even slower expansion
        ripple.alpha -= 0.0002; // even slower fade-out
      });

      requestAnimationFrame(draw);
    };

    const addRipple = e => {
      const now = Date.now();
      if (now - lastRippleTime < 400) return; // slightly bigger gap

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ripples.current.push({ x, y, radius: 0, alpha: 0.3 }); // start with softer alpha
      lastRippleTime = now;
    };

    canvas.addEventListener('mousemove', addRipple);
    draw();

    return () => {
      canvas.removeEventListener('mousemove', addRipple);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);


  useEffect(() => {
    // Observer to auto-play video when it enters viewport
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Hydrocawach
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              At Hydrocawach Technologies, we harness the power of hydrodynamic cavitation
              to revolutionize water treatment. Our patented technology combines cutting-edge
              science with sustainable practices to deliver scalable solutions for clean water
              access.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              As a research-driven Indian startup, we're committed to bridging the gap between
              innovative engineering and social good, making clean water accessible to all.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              ref={containerRef}
              className="ripple-container aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl relative cursor-pointer"
            >
              <video
                ref={videoRef}
                src="vid.mp4"
                muted
                loop
                playsInline
                className="object-cover w-full h-full"
                draggable={false}
              />
              <canvas ref={canvasRef} className="ripple-canvas" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
