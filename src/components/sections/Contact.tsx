'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-accent font-mono text-xs uppercase tracking-[0.4em] mb-6 block">
                The Connection
              </span>
              <h2 className="text-4xl md:text-7xl font-black mb-12 uppercase tracking-tighter leading-none">
                Let&apos;s build <br />
                <span className="text-transparent border-text stroke-white/20">something</span> <br />
                <span className="text-accent">legendary</span>.
              </h2>
              
              <div className="space-y-6 text-muted-foreground font-medium text-lg leading-relaxed">
                <p>
                  I am currently available for selective freelance partnerships 
                  and high-impact full-time opportunities.
                </p>
                <p>
                  Whether you have a specific project in mind or just want to 
                  discuss technical architecture, I&apos;m all ears.
                </p>
              </div>

              <div className="mt-12 pt-12 border-t border-white/5 space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] font-black text-foreground/50">Direct Channel</p>
                <a 
                  href="mailto:hello@solobuilder.dev" 
                  className="text-2xl md:text-3xl font-black hover:text-accent transition-colors tracking-tighter"
                >
                  hello@solobuilder.dev
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="glass-card p-8 md:p-12 border-white/5"
            >
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center gap-6"
                >
                  <div className="p-6 bg-accent/10 text-accent rounded-full">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight">Message Received</h3>
                  <p className="text-muted-foreground font-medium max-w-sm">
                    I&apos;ll review your request and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-xs font-black uppercase tracking-widest text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-accent/50 outline-none transition-all font-medium text-sm"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-accent/50 outline-none transition-all font-medium text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Subject</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Project Inquiry"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-accent/50 outline-none transition-all font-medium text-sm"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Message Body</label>
                    <textarea 
                      required
                      rows={6}
                      placeholder="Tell me about your vision..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-accent/50 outline-none transition-all font-medium text-sm resize-none"
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-6 bg-accent text-accent-foreground font-black uppercase tracking-[0.3em] text-xs rounded-xl hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4 group"
                  >
                    {isSubmitting ? 'Sending Transmission...' : 'Launch Message'}
                    {!isSubmitting && <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
