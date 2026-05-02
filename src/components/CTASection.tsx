'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <Card className="max-w-4xl mx-auto p-10 md:p-16 text-center relative overflow-hidden border-border bg-card/50">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-grid-white/5 opacity-10" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6"
              >
                <Zap size={14} className="text-primary" />
                Limited Spots Available
              </motion.div>

              <h2 className="section-title font-display mb-4 text-balance">
                Want to Grow Your <span className="text-primary">Content?</span>
              </h2>

              <p className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
                Get your first reel edited for <span className="text-primary">FREE</span>
              </p>

              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                No commitment. No payment. Just send me your raw footage and I&apos;ll edit one reel for you — so you can see the quality before we work together.
              </p>

              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-10 h-14 group mx-auto"
              >
                Claim Your Free Edit
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="mt-5 text-muted-foreground text-sm">No credit card required. Response within 24 hours.</p>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
