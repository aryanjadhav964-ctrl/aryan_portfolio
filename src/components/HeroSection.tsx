'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 section-container text-center flex flex-col items-center gap-6 pt-24 pb-16"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
        >
          <Sparkles size={14} className="text-primary" />
          Available for new projects
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-border relative z-10">
            {/* Fallback avatar */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold font-display text-muted-foreground">A</span>
            </div>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4"
        >
          <motion.p variants={itemVariants} className="text-muted-foreground text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] font-medium px-4 md:px-0 text-center">
            Freelance Video Editor & Shopify Developer
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-4xl"
          >
            Hi, I&apos;m{' '}
            <span className="text-primary">Aryan</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-base md:text-xl max-w-2xl leading-relaxed text-balance px-4 md:px-0"
          >
            I help <span className="text-foreground font-medium">creators and brands</span> grow with{' '}
            <span className="text-primary font-medium">high-converting content</span> — from scroll-stopping reels to revenue-generating Shopify stores.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <Button
              size="lg"
              onClick={() => scrollTo('#contact')}
              className="group text-base px-8 h-12"
            >
              Get Free Sample Edit
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo('#work')}
              className="group text-base px-8 h-12"
            >
              <Play size={14} className="mr-2" />
              View My Work
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 mt-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">50+</span>
              <span>Projects Done</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">5M+</span>
              <span>Views Generated</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">30+</span>
              <span>Happy Clients</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted-foreground text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
