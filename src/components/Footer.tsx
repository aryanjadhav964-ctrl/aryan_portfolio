'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center">
              <span className="text-white font-bold font-display">A</span>
            </div>
            <span className="font-display font-bold text-lg text-white">
              Aryan<span className="text-violet-400">.</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1.5">
            © {year} Aryan. Made with <Heart size={13} className="text-primary fill-primary" /> in India
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
