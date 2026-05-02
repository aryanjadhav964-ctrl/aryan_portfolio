'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Lightbulb, ShoppingBag, Share2, ChevronDown, Check } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'reels',
    icon: Film,
    title: 'Reel Editing',
    description: 'Scroll-stopping short-form video edits that drive views, engagement, and followers.',
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(124,58,237,0.3)',
    features: ['Instagram & YouTube Reels', 'Motion graphics & transitions', 'Custom music sync', 'Captions & subtitles', 'Platform-optimized export'],
  },
  {
    id: 'content',
    icon: Lightbulb,
    title: 'Content Strategy',
    description: 'Data-driven content plans that grow your audience and convert viewers into buyers.',
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(34,211,238,0.3)',
    features: ['Niche & competitor analysis', 'Content calendar creation', 'Hook writing & scripting', 'Trend research', 'Performance tracking'],
  },
  {
    id: 'shopify',
    icon: ShoppingBag,
    title: 'Shopify Store Setup',
    description: 'High-converting Shopify stores designed to turn traffic into revenue.',
    color: 'from-emerald-500 to-green-600',
    glow: 'rgba(16,185,129,0.3)',
    features: ['Custom theme setup & design', 'Product page optimization', 'Payment & shipping setup', 'SEO configuration', 'Speed optimization'],
  },
  {
    id: 'social',
    icon: Share2,
    title: 'Social Media Management',
    description: 'Full account management — from posting schedules to community engagement.',
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236,72,153,0.3)',
    features: ['Daily/weekly posting', 'Story & Reels creation', 'Community management', 'Analytics reporting', 'Brand consistency'],
  },
];

export default function ServicesSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-[0.2em] mb-3">What I Do</p>
          <h2 className="section-title font-display">
            Services That <span className="text-primary">Convert</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Every service is built around one goal — growing your brand and revenue.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isExpanded = expanded === service.id;

            return (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <Card 
                  className="cursor-pointer group relative overflow-hidden transition-all duration-300 hover:border-primary/50"
                  onClick={() => setExpanded(isExpanded ? null : service.id)}
                >
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-muted-foreground group-hover:text-foreground transition-colors mt-1"
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </div>

                    <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <CardContent className="pt-0">
                          <div className="mt-2 pt-5 border-t border-border">
                            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">What&apos;s Included</p>
                            <ul className="space-y-2">
                              {service.features.map((f) => (
                                <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Check size={12} className="text-primary" />
                                  </div>
                                  {f}
                                </li>
                              ))}
                            </ul>
                            <Button
                              onClick={(e) => { e.stopPropagation(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                              className="mt-6 w-full"
                            >
                              Get Started →
                            </Button>
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
