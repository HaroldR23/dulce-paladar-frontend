'use client';

import { motion } from 'motion/react';
import { Phone, Mail, Clock, MapPin} from 'lucide-react';

const ContactInfo = () => {
  return (
    <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-['Cormorant'] text-xl mb-6">Contacto</h3>
            <address className="not-italic">
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#E94FA3] mt-1 shrink-0" />
                <span className="text-white/70">
                  Villavicencio, Meta, Colombia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#E94FA3] shrink-0" />
                <a href="tel:+573133095186" className="text-white/70 hover:text-[#E94FA3] transition-colors duration-200">
                  +57 313 3095186
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#E94FA3] shrink-0" />
                <a href="mailto:dulcepaladartyp@gmail.com" className="text-white/70 hover:text-[#E94FA3] transition-colors duration-200">
                  dulcepaladartyp@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#E94FA3] mt-1 shrink-0" />
                <div className="text-white/70">
                  <p>Lun - Vie: 9:00 - 19:00</p>
                  <p>Sáb: 10:00 - 14:00</p>
                  <p>Dom: Cerrado</p>
                </div>
              </li>
            </ul>
            </address>
          </motion.div> 
  );
};

export default ContactInfo;
