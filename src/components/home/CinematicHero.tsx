import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Sparkles, ChevronDown, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export const CinematicHero: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Parallax states for mouse / mobile gyroscope
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Scroll collapse animation
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.1]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Desktop mouse parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setTilt({ x, y });
  };

  // Mobile Gyroscope listener
  useEffect(() => {
    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      if (event.gamma !== null && event.beta !== null) {
        // gamma: left-to-right (-90 to 90)
        // beta: front-to-back (-180 to 180)
        const x = Math.min(Math.max((event.gamma / 45) * 15, -15), 15);
        const y = Math.min(Math.max(((event.beta - 45) / 45) * 15, -15), 15);
        setTilt({ x, y });
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleDeviceOrientation, { passive: true });
    }
    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  // Layer 4: Interactive Golden Temple Dust Particles on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool
    const particles = Array.from({ length: 65 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.6 - 0.2, // Drifting upwards like incense / temple dust
      opacity: Math.random() * 0.7 + 0.2,
      pulse: Math.random() * Math.PI,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.02;

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 154, 58, ${currentOpacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#C49A3A';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[#041D16]"
    >
      {/* LAYER 1: Cinematic Heritage Backdrop with Parallax Tilt */}
      <motion.div
        className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] bg-cover bg-center filter brightness-[0.72] contrast-[1.08]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2000&q=85')`,
          x: tilt.x * -1.2,
          y: tilt.y * -1.2,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
      >
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#083B2D] via-[#083B2D]/40 to-black/60" />
      </motion.div>

      {/* LAYER 2: Floating Clouds Movement */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{ x: tilt.x * 2.0 }}
      >
        <div className="absolute top-10 -left-40 w-[600px] h-[300px] bg-white/20 rounded-full filter blur-[90px] animate-float" />
        <div className="absolute bottom-32 -right-40 w-[700px] h-[350px] bg-[#FAF8F4]/15 rounded-full filter blur-[110px] animate-float" />
      </motion.div>

      {/* LAYER 3: Flying Birds Silhouettes SVG */}
      <motion.div
        className="absolute top-24 left-0 w-full pointer-events-none opacity-40"
        style={{ x: tilt.x * 0.8 }}
      >
        <svg className="w-full h-24" viewBox="0 0 1000 100" fill="none">
          {/* Bird 1 */}
          <path
            d="M 200 40 Q 215 25, 230 40 Q 245 25, 260 40 Q 245 35, 230 45 Q 215 35, 200 40 Z"
            fill="#FAF8F4"
            className="animate-pulse"
          />
          {/* Bird 2 */}
          <path
            d="M 280 60 Q 290 50, 300 60 Q 310 50, 320 60 Q 310 57, 300 64 Q 290 57, 280 60 Z"
            fill="#C49A3A"
          />
          {/* Bird 3 */}
          <path
            d="M 330 35 Q 342 22, 355 35 Q 367 22, 380 35 Q 367 31, 355 40 Q 342 31, 330 35 Z"
            fill="#FAF8F4"
          />
        </svg>
      </motion.div>

      {/* LAYER 4: Interactive Golden Temple Dust Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
      />

      {/* LAYER 5: Sunlight Rays Gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-[600px] bg-gradient-to-b from-[#C49A3A]/20 via-[#DFB757]/10 to-transparent transform rotate-12 pointer-events-none filter blur-2xl" />

      {/* Hero Content Container (With collapse animation) */}
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-16"
      >
        {/* Crown Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C49A3A]/40 text-[#C49A3A] text-xs font-semibold uppercase tracking-[0.25em] mb-6 shadow-gold-glow"
        >
          <Compass className="w-3.5 h-3.5 text-[#C49A3A] animate-spin-slow" />
          <span>Sovereign AI Heritage Platform • Bharat</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF8F4] font-bold tracking-tight leading-[1.08] mb-6 drop-shadow-2xl"
        >
          {t('heroHeadline', 'Discover the Soul of India.')}
        </motion.h1>

        {/* Hero Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-subheading text-xl sm:text-2xl md:text-3xl text-[#FAF8F4]/90 max-w-3xl font-light italic leading-relaxed mb-10 text-balance"
        >
          {t(
            'heroSubheadline',
            'AI-powered journeys through 5,000 years of timeless heritage, sacred temples, grand forts, and living traditions.'
          )}
        </motion.p>

        {/* Dual Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md"
        >
          <Link
            to="/explore"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#C49A3A] via-[#DFB757] to-[#AA7F27] text-[#083B2D] font-bold text-base shadow-gold-glow hover:shadow-[0_0_35px_rgba(196,154,58,0.6)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Compass className="w-5 h-5 text-[#083B2D]" />
            <span>{t('btnExplore', 'Explore Heritage')}</span>
          </Link>

          <Link
            to="/ai-planner"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-[#C49A3A]/50 text-[#FAF8F4] font-semibold text-base hover:border-[#C49A3A] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-[#C49A3A]" />
            <span>{t('btnPlanAI', 'Plan with AI')}</span>
          </Link>
        </motion.div>

        {/* Fast Metrics Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-[#FAF8F4]/80 font-mono"
        >
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#C49A3A] shadow-gold-glow" />
            <strong className="text-white text-sm">50</strong>
            <span>Sites</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E67E22]" />
            <strong className="text-white text-sm">50</strong>
            <span>Hidden Gems</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4F9E75]" />
            <strong className="text-white text-sm">50</strong>
            <span>Festivals</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#C49A3A]" />
            <strong className="text-white text-sm">28 States & 8 UTs</strong>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-[#C49A3A] cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-mono mb-1 text-[#FAF8F4]/70">
          Scroll to Map
        </span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
};
