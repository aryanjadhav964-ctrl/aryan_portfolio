'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Eye, Music, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const reels = [
  { id: 1, title: 'Gym Transformation', category: 'Fitness', views: '243K', likes: '18.2K', color: 'from-violet-600 to-purple-800', emoji: '💪', videoUrl: '', href: '' },
  { id: 2, title: 'Fashion design', category: 'Fashion', views: '189K', likes: '14.5K', color: 'from-pink-600 to-rose-800', emoji: '👗', videoUrl: 'https://mtsvqzvisqfzlvbixepa.supabase.co/storage/v1/object/sign/reels-videos/niki%20final%20last.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MDM3MzQxYi1mYTE1LTQ0OGYtOWZjMy04MTljNTg0ZGY3M2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZWVscy12aWRlb3MvbmlraSBmaW5hbCBsYXN0Lm1wNCIsImlhdCI6MTc3NzgxODAyNSwiZXhwIjoxODA5MzU0MDI1fQ.h1VoiN5Ld8YJqCROsQuxxvs6aWeUqu8X50uW2P7N_Rg', href: '' },
  { id: 3, title: 'Product Launch by Janayebyrajni', category: 'Janayebyrajni', views: '512K', likes: '31.8K', color: 'from-cyan-600 to-blue-800', emoji: '🚀', videoUrl: 'https://mtsvqzvisqfzlvbixepa.supabase.co/storage/v1/object/sign/reels-videos/rajni%203.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MDM3MzQxYi1mYTE1LTQ0OGYtOWZjMy04MTljNTg0ZGY3M2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZWVscy12aWRlb3MvcmFqbmkgMy5tcDQiLCJpYXQiOjE3Nzc4MTgwNjksImV4cCI6MTgwOTM1NDA2OX0.93R0BEEH3hOAfcVEgc4N2dyQxABfgtcunUMkuJQmkiE', href: '' },
  { id: 4, title: 'Mangalsutra', category: 'indian tredition', views: '328K', likes: '22.1K', color: 'from-amber-600 to-orange-800', emoji: '✈️', videoUrl: '', href: '' },
  { id: 5, title: 'Food Reel', category: 'Food', views: '156K', likes: '11.7K', color: 'from-emerald-600 to-green-800', emoji: '🍜', videoUrl: 'https://mtsvqzvisqfzlvbixepa.supabase.co/storage/v1/object/sign/reels-videos/rajni2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MDM3MzQxYi1mYTE1LTQ0OGYtOWZjMy04MTljNTg0ZGY3M2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZWVscy12aWRlb3MvcmFqbmkyLm1wNCIsImlhdCI6MTc3NzgxODEyNiwiZXhwIjoxODA5MzU0MTI2fQ.e9GaUjDMSljzwCCFlN-5H2gQ3RDCFTJJikTUfJDJj9I', href: '' },
  { id: 6, title: 'new house', category: 'Lifestyle new house', views: '890K', likes: '64.3K', color: 'from-indigo-600 to-violet-800', emoji: '⚡', videoUrl: '', href: '' },
];

export default function ReelsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: dir === 'right' ? 280 : -280, behavior: 'smooth' });
    }
  };

  return (
    <section id="reels" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-background pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-[0.2em] mb-3">Portfolio</p>
          <h2 className="section-title font-display">
            Reels That <span className="text-primary">Performed</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Each reel crafted to hook viewers in the first 3 seconds.
          </p>
        </AnimatedSection>

        {/* Scroll arrows */}
        <AnimatedSection>
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full md:-translate-x-6 shadow-md bg-background"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full md:translate-x-6 shadow-md bg-background"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </Button>

            <div
              ref={containerRef}
              className="reels-container hide-scrollbar px-2"
            >
              {reels.map((reel, i) => (
                <motion.div
                  key={reel.id}
                  className="reel-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  {/* Phone-sized card */}
                  <Card
                    className="relative w-[200px] h-[356px] md:w-[220px] md:h-[390px] overflow-hidden group cursor-pointer border-border"
                    onClick={() => reel.href && window.open(reel.href, '_blank')}
                  >
                    {/* Background */}
                    {reel.videoUrl ? (
                      <>
                        <video
                          src={reel.videoUrl}
                          className="absolute inset-0 w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                      </>
                    ) : (
                      <>
                        {/* Background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${reel.color} opacity-80`} />

                        {/* Overlay noise texture */}
                        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                          style={{
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                          }}
                        />

                        {/* Emoji decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl opacity-20 select-none">
                          {reel.emoji}
                        </div>
                      </>
                    )}

                    {/* Play button */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                        <Play size={20} className="text-white translate-x-0.5" />
                      </div>
                    </motion.div>

                    {/* Music bar */}
                    <div className="absolute top-4 left-4 right-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Music size={10} className="text-white" />
                      </div>
                      <div className="flex gap-0.5 items-end h-4">
                        {[3, 5, 4, 6, 3, 5, 4].map((h, idx) => (
                          <motion.div
                            key={idx}
                            className="w-1 bg-white rounded-full"
                            animate={{ height: [`${h * 2}px`, `${h * 3}px`, `${h * 2}px`] }}
                            transition={{ duration: 0.5 + idx * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-white/50 text-[10px] uppercase tracking-widest mb-0.5">{reel.category}</p>
                      <p className="text-white font-semibold text-sm leading-tight mb-2">{reel.title}</p>
                      <div className="flex items-center gap-3 text-white/70 text-xs">
                        <span className="flex items-center gap-1"><Eye size={11} />{reel.views}</span>
                        <span className="flex items-center gap-1"><Heart size={11} />{reel.likes}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
