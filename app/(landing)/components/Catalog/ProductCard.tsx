import { AnimatePresence, motion } from 'motion/react';
import { Eye, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { ProductCardProps } from '../props/productCardProps';

const ProductCard = ({
  name,
  price,
  image,
  id,
  tags = [],
}: ProductCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div key={id}>
      <motion.div
        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-linear-to-br from-[#FFF8F0] to-[#FFE5E5]">
          
          {/* Shared Image */}
          <motion.div
            className="relative w-full h-full"
          >
            <Image 
              src={image} 
              alt={name} 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            />
          </motion.div>

          {/* Tags (NO animados con layoutId) */}
          {tags.length > 0 && (
            <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs text-foreground/80 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Hover Actions */}
          <motion.div
            className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-6 gap-3"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              onClick={() => setOpen(true)}
              className="p-3 bg-white rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye className="w-5 h-5 text-foreground" />
            </motion.button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-['Cormorant'] text-xl mb-2 text-foreground group-hover:text-[#FF6B6B] transition-colors duration-200">
            {name}
          </h3>
          <span className="text-2xl text-[#FF6B6B]">{price}</span>
        </div>
      </motion.div>

      {/* 🔥 Image Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <div
              className="relative max-w-4xl w-full aspect-square"
            >
              {/* Shared Image */}
              <motion.div
                className="relative w-full h-full bg-[#FFD6E7]/55 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain rounded-xl"
                />
              </motion.div>

              {/* Tags en modal */}
              {tags.length > 0 && (
                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/90 rounded-full text-xs shadow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductCard;
