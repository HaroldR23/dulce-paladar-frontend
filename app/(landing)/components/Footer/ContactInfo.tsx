'use client';

import { motion } from 'motion/react';
import { Phone, Mail, Clock} from 'lucide-react';

const ContactInfo = () => {
  return (
    <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-['Cormorant'] text-xl mb-6">Contacto</h3>
            <ul className="space-y-4">
              {/* <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#E94FA3] mt-1 shrink-0" />
                <span className="text-white/70">
                  Barrio Dos Mil Alto <br />  
                  Cra. 20 # 25C-30 <br />
                  Villavicencio, Meta, Colombia
                </span>
              </li> */}
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#E94FA3] shrink-0" />
                <a href="tel:+573123052735" className="text-white/70 hover:text-[#E94FA3] transition-colors duration-200">
                  +57 312 3052735
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#E94FA3] shrink-0" />
                <a href="mailto:hola@dulcepaladar.com" className="text-white/70 hover:text-[#E94FA3] transition-colors duration-200">
                  hola@dulcepaladar.com
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
          </motion.div> 
  );
};

export default ContactInfo;
