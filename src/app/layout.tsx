import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000'),
  title: 'Aryan | Freelance Video Editor & Shopify Developer',
  description:
    'I help creators and brands grow with high-converting content. Specializing in reel editing, content strategy, Shopify store setup, and social media management.',
  keywords: [
    'video editor',
    'shopify developer',
    'freelance',
    'reel editing',
    'content strategy',
    'social media',
  ],
  openGraph: {
    title: 'Aryan | Freelance Video Editor & Shopify Developer',
    description:
      'I help creators and brands grow with high-converting content.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground antialiased`}>
        <GoogleAnalytics />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(13,17,23,0.95)',
              color: '#f0f0f0',
              border: '1px solid rgba(124,58,237,0.3)',
              backdropFilter: 'blur(12px)',
              borderRadius: '12px',
            },
            success: {
              iconTheme: { primary: '#7c3aed', secondary: '#fff' },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
