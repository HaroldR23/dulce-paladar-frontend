import { motion } from "framer-motion";
import { Calendar, Users, MessageCircle, Cake } from "lucide-react";

import { FormQuoteProps } from "../../props/formQuoateProps";
import { SelectField } from "./FormFields/SelectField";
import { TextInputField } from "./FormFields/TextInputField";
import { FILLING_OPTIONS, FLAVOR_OPTIONS, SERVINGS_OPTIONS } from "../../../contants/data";


const Form = ({ formData, handleChange, handleSubmit }: FormQuoteProps) => {
  return (
    <motion.div
      className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-['Cormorant'] text-3xl mb-8 text-foreground">
        Cotizador de tortas
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Servings */}
        <SelectField
          name="servings"
          label="Porciones"
          icon={Users}
          value={formData.servings}
          onChange={handleChange}
          options={SERVINGS_OPTIONS}
          required
        />

        {/* Flavor */}
        <SelectField
          name="flavor"
          label="Sabor del bizcochuelo"
          icon={Cake}
          value={formData.flavor}
          onChange={handleChange}
          options={FLAVOR_OPTIONS}
          required
        />

        {/* Filling */}
        <SelectField
          name="filling"
          label="Relleno"
          value={formData.filling}
          onChange={handleChange}
          options={FILLING_OPTIONS}
          required
        />

        {/* Decoration */}
        <TextInputField
          name="decoration"
          label="Decoración deseada"
          value={formData.decoration}
          onChange={handleChange}
          placeholder="Ej: Flores de azúcar, temática unicornio..."
        />

        {/* Date */}
        <TextInputField
          name="date"
          label="Fecha del evento"
          icon={Calendar}
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        {/* Message */}
        <TextInputField
          name="message"
          label="Texto en la torta (opcional)"
          value={formData.message}
          onChange={handleChange}
          placeholder="Ej: Feliz cumpleaños María"
        />

        {/* Submit */}
        <motion.button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-[#25D366] text-white rounded-full hover:bg-[#20BD5A] transition-all duration-200 shadow-xl shadow-[#25D366]/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <MessageCircle className="w-5 h-5" />
          <span>Enviar cotización por WhatsApp</span>
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Form;
