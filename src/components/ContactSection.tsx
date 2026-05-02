'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import AnimatedSection from './ui/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface FormData {
  name: string;
  email: string;
  instagram_or_phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}


export default function ContactSection() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', instagram_or_phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.message.trim()) errs.message = 'Please tell me about your project';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setSuccess(true);
      toast.success('Message sent! I\'ll reply within 24 hours. 🎉');
      setForm({ name: '', email: '', instagram_or_phone: '', message: '' });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to send. Please try again.';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field as keyof FormErrors]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary text-sm font-medium uppercase tracking-[0.2em] mb-3">Get In Touch</p>
            <h2 className="section-title font-display">
              Let&apos;s <span className="text-primary">Work Together</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Describe your project and I&apos;ll get back to you within 24 hours.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center rounded-xl border border-border bg-card"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle size={40} className="text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold font-display mb-3">Message Sent! 🎉</h3>
                <p className="text-muted-foreground mb-6">I&apos;ll review your project and reply within 24 hours.</p>
                <Button variant="outline" onClick={() => setSuccess(false)}>Send Another Message</Button>
              </motion.div>
            ) : (
              <Card className="p-8 border-border space-y-5">
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <User size={11} /> Name
                    </label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={update('name')}
                      className={`${errors.name ? 'border-destructive' : ''}`}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Mail size={11} /> Email
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={update('email')}
                      className={`${errors.email ? 'border-destructive' : ''}`}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                  </div>

                  {/* Instagram/Phone */}
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Phone size={11} /> Instagram / Phone
                    </label>
                    <Input
                      id="contact-social"
                      type="text"
                      placeholder="@yourusername or +91 XXXXX XXXXX"
                      value={form.instagram_or_phone}
                      onChange={update('instagram_or_phone')}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <MessageSquare size={11} /> Tell Me About Your Project
                    </label>
                    <Textarea
                      id="contact-message"
                      rows={5}
                      placeholder="What do you need help with? (niche, goals, current situation...)"
                      value={form.message}
                      onChange={update('message')}
                      className={`resize-none ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-center text-muted-foreground text-xs">
                    100% free consultation. No spam, ever.
                  </p>
                </form>
              </Card>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
