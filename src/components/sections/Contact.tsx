'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail className="text-accent" />, label: 'Email', value: 'hello@solobuilder.dev' },
    { icon: <MapPin className="text-accent" />, label: 'Location', value: 'San Francisco, CA' },
    { icon: <Phone className="text-accent" />, label: 'Phone', value: '+1 (555) 123-4567' },
  ];

  return (
    <section id="contact" className="max-w-7xl mx-auto py-24 px-6 md:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase text-center md:text-left">
          GET IN <span className="neon-text">TOUCH</span>
        </h2>
        <p className="max-w-2xl text-muted-foreground text-lg md:text-xl text-center md:text-left mx-auto md:mx-0">
          Interested in working together? Let&apos;s discuss your next project or just say hello.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-6 group">
                <div className="p-4 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{info.label}</p>
                  <p className="text-xl font-bold group-hover:text-accent transition-colors">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 border-accent/10">
            <h3 className="text-xl font-black mb-4 uppercase">Social <span className="neon-text">Presence</span></h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m active on LinkedIn, GitHub, and Twitter. Feel free to reach out there as well.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 border-accent/20"
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={48} className="text-accent" />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase">Message <span className="neon-text">Sent</span></h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out! I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-accent font-bold uppercase tracking-widest text-sm underline underline-offset-8"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:border-accent focus:outline-none transition-colors text-white"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:border-accent focus:outline-none transition-colors text-white"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:border-accent focus:outline-none transition-colors text-white resize-none"
                    placeholder="Enter your message"
                  />
                </div>
                <MagneticButton
                  className="w-full py-5 bg-accent text-accent-foreground font-black uppercase tracking-widest rounded-lg flex items-center gap-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={18} />
                </MagneticButton>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
