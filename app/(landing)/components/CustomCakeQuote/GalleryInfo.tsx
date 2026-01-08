import { motion } from 'framer-motion';
import Image from 'next/image';
import { GALLERY_IMAGES_INFO, WHY_CHOOSE_OPTIONS } from '../../contants/data';

const GalleryInfo = () => {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="bg-linear-to-br from-[#FFE5E5] to-[#E6E6FA] rounded-3xl p-8">
        <h4 className="font-['Cormorant'] text-2xl mb-4 text-foreground">
          ¿Por qué elegirnos?
        </h4>
        <ul className="space-y-4">
          {WHY_CHOOSE_OPTIONS.map((item, index) => (
            <motion.li
              key={item}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-2 h-2 bg-[#FF6B6B] rounded-full"></div>
              <span className="text-foreground/80">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {GALLERY_IMAGES_INFO.map((image, index) => (
          <motion.div
            key={index}
            className="aspect-square rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={image}
              width={400}
              height={400}
              alt={`Torta ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GalleryInfo;
