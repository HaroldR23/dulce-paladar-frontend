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
        Creando dulces recuerdos desde 2020
      </h3>
      
      <p className="text-foreground/70 leading-relaxed">
        Dulce Paladar nació de una pasión familiar por la repostería artesanal. 
        Comenzamos en nuestra cocina casera, creando tortas personalizadas para amigos 
        y familia. Hoy, somos una pastelería reconocida en Palermo, manteniendo el mismo 
        compromiso con la calidad y el toque casero que nos caracteriza.
      </p>

      <p className="text-foreground/70 leading-relaxed">
        Cada producto que sale de nuestro horno lleva amor, dedicación y los mejores 
        ingredientes. No hacemos repostería industrial; hacemos arte comestible que 
        celebra tus momentos más especiales.
      </p>

      <div className="bg-linear-to-br from-[#FFE5E5] to-[#E6E6FA] rounded-2xl p-6">
        <p className="text-foreground/80 italic">
          &ldquo;Nuestro compromiso es simple: ingredientes de calidad, diseños únicos y 
          sabores que crean recuerdos inolvidables.&rdquo;
        </p>
        <p className="text-sm text-foreground/60 mt-2">
          — María, fundadora de Dulce Paladar
        </p>
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        <div className="flex items-center space-x-2 px-4 py-2 bg-white border border-border rounded-full">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-foreground/70">100% Artesanal</span>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-white border border-border rounded-full">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-foreground/70">Ingredientes Premium</span>
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
