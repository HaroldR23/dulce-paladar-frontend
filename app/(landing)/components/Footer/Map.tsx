'use client';

import { motion } from 'motion/react';
import { mapLinkLocation } from '../../contants/data';

const Map = () => {
  return (
  <motion.div
    className="bg-white/5 rounded-2xl overflow-hidden mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.4 }}
  >
    <div className="aspect-video">
      <iframe
        src={mapLinkLocation}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Dulce Paladar Location"
      />
    </div>
  </motion.div>
  );
};

export default Map; 
