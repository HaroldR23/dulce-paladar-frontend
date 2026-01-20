'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import NavBarDesktop from './NavBarDesktop';
import MobileButton from './MobileButton';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

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
      className="absolute top-0 left-0 right-0 bg-transparent z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* <div className="absolute inset-0 bg-linear-to-br from-[#FFF8F0] via-[#FAF7F2] to-[#FFE5E5]"/> */}
      <div className="flex justify-around">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image src="/favicon.ico" alt="Logo" width={250} height={250} />
        </motion.a>
        <div className={`flex justify-around items-center h-50`}>
          <NavBarDesktop />
          <MobileButton isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </div>
      </div>

      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
    </motion.header>
  );
}

export default NavBar;
