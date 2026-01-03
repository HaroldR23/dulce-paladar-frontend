'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import NavBarDesktop from './NavBarDesktop';
import MobileButton from './MobileButton';
import MobileMenu from './MobileMenu';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-linear-to-br from-[#FF6B6B] to-[#FFE5E5] rounded-full flex items-center justify-center">
              <span className="text-white font-bold">DP</span> {/* Here should be the real icon */}
            </div>
            <span className="font-['Cormorant'] text-2xl text-foreground">
              Dulce Paladar
            </span>
          </motion.a>

          <NavBarDesktop />

          <MobileButton isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </div>
      </div>

      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
    </motion.header>
  );
}

export default NavBar;
