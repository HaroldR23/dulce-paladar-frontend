import { motion } from 'motion/react';


const Content = () => {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-['Cormorant'] text-3xl text-foreground">
        Creando dulces recuerdos desde 2016
      </h3>
      
      <p className="text-foreground/70 leading-relaxed">
        Dulce Paladar nació de una pasión que me acompaña desde niña: 
        la magia de transformar ingredientes sencillos en momentos dulces e inolvidables. 
        Con el tiempo, esos recuerdos de aromas y sabores despertaron la pastelera que siempre vivió en mí. 
      </p>

      <p className="text-foreground/70 leading-relaxed">
        Hoy, con manos bendecidas por Dios y mucho amor por lo que hago, creo pastelería artesanal desde casa, solo sobre pedido y totalmente personalizada. 
        Cada creación lleva dedicación, ingredientes de calidad y el propósito de celebrar tus momentos más especiales. No hacemos pastelería industrial, hacemos arte comestible
      </p>

      {/* <div className="bg-linear-to-br from-[#FFE5E5] to-[#E6E6FA] rounded-2xl p-3"> */}
        {/* <p className="text-foreground/80 italic">
          &ldquo;Nuestro compromiso es simple: ingredientes de calidad, diseños únicos y 
          sabores que crean recuerdos inolvidables.&rdquo;
        </p> */}
        <p className="text-sm text-foreground/60 text-[#E94FA3] font-semibold mt-2">
          — Necda Rodriguez, fundadora de Dulce Paladar
        </p>
      {/* </div> */}

      <div className="flex flex-wrap gap-4 pt-4">
        <div className="flex items-center space-x-2 px-4 py-2 bg-white border border-border rounded-full">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-foreground/70">100% Artesanal</span>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-white border border-border rounded-full">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-foreground/70">Sin conservantes</span>
        </div>
      </div>
    </motion.div>
  );

};

export default Content;
