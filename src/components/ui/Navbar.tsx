'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4 bg-black/80 backdrop-blur-lg border-b border-white/10' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black uppercase tracking-tighter"
        >
          GIBSON<span className="text-accent">KOBIA</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              whileHover={{ scale: 1.1, color: '#00f3ff' }}
              className="text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors"
            >
              {link.name}
            </motion.button>
          ))}
          <MagneticButton
            onClick={() => handleNavClick('#contact')}
            className="px-6 py-2 bg-accent text-accent-foreground text-xs font-black uppercase tracking-widest rounded-full"
          >
            Hire Me
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-black/95 z-[90] flex flex-col items-center justify-center gap-12 p-6 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-3xl font-black uppercase tracking-tighter text-white hover:text-accent transition-colors"
              >
                {link.name}
              </button>
            ))}
            <MagneticButton
              onClick={() => handleNavClick('#contact')}
              className="px-10 py-4 bg-accent text-accent-foreground text-lg font-black uppercase tracking-widest rounded-full"
            >
              Hire Me
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
