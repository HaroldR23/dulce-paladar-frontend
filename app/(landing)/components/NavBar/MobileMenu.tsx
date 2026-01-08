import { motion, AnimatePresence } from 'motion/react';
import { menuItems } from '../../contants/data';
import { MobileMenuProps } from '../props/navBarProps';

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileMenuProps) => {
  return (
    <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="container mx-auto px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground/80 hover:text-[#FF6B6B] transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
  )
};

export default MobileMenu;
