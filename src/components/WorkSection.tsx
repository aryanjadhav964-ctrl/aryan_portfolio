'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Eye, Heart, ShoppingCart } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const works = [
  {
    id: 1,
    category: 'Reel Editing',
    title: 'Fitness Brand — 0 to 500K Views',
    description: 'Transformed raw gym footage into a viral reel series. Built a consistent posting cadence with trending audio and fast-cut transitions that drove massive organic reach.',
    stats: [
      { icon: Eye, label: 'Total Views', value: '500K+' },
      { icon: Heart, label: 'Avg Engagement', value: '8.2%' },
      { icon: TrendingUp, label: 'Followers Gained', value: '+12K' },
    ],
    color: 'from-violet-500 to-purple-700',
    tag: 'Video Editing',
    tagColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  },
  {
    id: 2,
    category: 'Shopify',
    title: 'Fashion Store — ₹0 to ₹3L/Month',
    description: 'Set up a complete Shopify store from scratch including product photography direction, theme customization, SEO, and a launch strategy that hit 3 Lakh revenue in month 2.',
    stats: [
      { icon: ShoppingCart, label: 'Monthly Revenue', value: '₹3L+' },
      { icon: TrendingUp, label: 'Conv. Rate', value: '3.8%' },
      { icon: Eye, label: 'Monthly Visitors', value: '25K+' },
    ],
    color: 'from-emerald-500 to-green-700',
    tag: 'Shopify',
    tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  },
  {
    id: 3,
    category: 'Content Strategy',
    title: 'Creator Account — 2K to 80K Followers',
    description: 'Developed a 90-day content strategy for a lifestyle creator. Scripted hooks, built content pillars, and edited 3 reels/week resulting in 78K new followers and brand deals.',
    stats: [
      { icon: TrendingUp, label: 'Followers Added', value: '+78K' },
      { icon: Heart, label: 'Reach Growth', value: '12x' },
      { icon: Eye, label: 'Total Impressions', value: '2M+' },
    ],
    color: 'from-cyan-500 to-blue-700',
    tag: 'Content Strategy',
    tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-background pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-[0.2em] mb-3">Case Studies</p>
          <h2 className="section-title font-display">
            Real Results, <span className="text-primary">Real Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Not just pretty edits — measurable impact for brands and creators.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <AnimatedSection key={work.id} delay={i * 0.12}>
              <Card className="h-full flex flex-col overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="font-semibold px-3 py-1">
                      {work.tag}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold font-display mb-3 group-hover:text-primary transition-colors leading-snug">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{work.description}</p>

                  {/* Stats */}
                  <div className="mt-6 pt-5 border-t border-border grid grid-cols-3 gap-3">
                    {work.stats.map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <div key={stat.label} className="text-center">
                          <div className="flex justify-center mb-2">
                            <Icon size={16} className="text-muted-foreground" />
                          </div>
                          <div className="text-lg font-bold font-display text-foreground">
                            {stat.value}
                          </div>
                          <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
