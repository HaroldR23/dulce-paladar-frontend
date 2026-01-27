import { motion } from 'framer-motion';
import Image from 'next/image';
import { WHY_CHOOSE_OPTIONS } from '../../contants/data';
import useIsMobile from '../../hooks/useIsMobile';

const GalleryInfo = () => {
  const isMobile =  useIsMobile();
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='flex flex-col justify-center gap-10'
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
              <div className="w-2 h-2 bg-[#E94FA3] rounded-full"></div>
              <span className="text-foreground/80">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="relative w-full mx-auto">
        <Image
          src="/fondo_pasteleria.jpg"
          width={1000}
          height={1000}
          alt="Fondo pastelería"
          className="rounded-2xl object-cover"
        />
        <Image
          src="/favicon.ico"
          width={isMobile ? 220 : 300}
          height={isMobile ? 220 : 300}
          alt="Dulce Paladar logo"
          className="
            absolute
            bottom-2
            md:bottom-12
            left-1/2
            -translate-x-1/2
            z-20
          "
        />
      </div>

    </motion.div>
  );
};

export default GalleryInfo;
