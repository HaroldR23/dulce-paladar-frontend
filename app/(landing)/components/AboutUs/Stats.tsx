import { motion } from 'motion/react';
import { stats } from '../../contants/data';

const Stats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-[#FFE5E5] to-[#E6E6FA] rounded-full mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <stat.icon className="w-10 h-10 text-[#E94FA3]" />
          </motion.div>
          <div className="font-['Cormorant'] text-4xl text-foreground mb-2">
            {stat.value}
          </div>
          <div className="text-foreground/60">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
