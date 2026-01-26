'use client';

import { motion } from 'motion/react';
import { Banknote, Landmark, CreditCard} from 'lucide-react';

const PaymentMethods = () => {
  return (
    <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-['Cormorant'] text-xl mb-6">Métodos de pago</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Banknote className="w-5 h-5 text-[#E94FA3] shrink-0" />
                <span className="text-white/70 transition-colors duration-200">
                  Efectivo
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Landmark className="w-5 h-5 text-[#E94FA3] mt-1 shrink-0" />
                <span className="text-white/70 transition-colors duration-200">
                  Nequi
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CreditCard className="w-5 h-5 text-[#E94FA3] shrink-0" />
                <span className="text-white/70 transition-colors duration-200">
                  Llave Bre-B (otros bancos)
                </span>
              </li>
            </ul>
          </motion.div> 
  );
};

export default PaymentMethods;
