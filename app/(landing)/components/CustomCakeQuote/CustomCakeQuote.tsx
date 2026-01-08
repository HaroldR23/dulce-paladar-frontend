import { useState } from 'react';
import Form from './Form/Form';
import GalleryInfo from './GalleryInfo';
import Header from './Header';
import { FormData } from '../props/formQuoateProps';

const CustomCakeQuote = () => {
  const [formData, setFormData] = useState<FormData>({
    servings: '10',
    flavor: '',
    filling: '',
    decoration: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
const message = `Hola  
¡Quiero cotizar una *torta personalizada* !

*Detalles del pedido*:
• Porciones: ${formData.servings}
• Sabor: ${formData.flavor || 'Sin especificar'}
• Relleno: ${formData.filling || 'Sin especificar'}
• Decoración: ${formData.decoration || 'Sin especificar'}

*Fecha del evento*:  
${formData.date || 'Sin especificar'}

*Mensaje especial en la torta*:  
${formData.message || 'Sin mensaje'}

¡Quedo atento/a a su respuesta!`;

    
    const whatsappUrl = `https://wa.me/573123052735?text=${encodeURIComponent(message)}`;
    console.log(whatsappUrl);
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="personalizadas" className="py-20 bg-linear-to-b from-white to-[#FAF7F2]">
      <div className="container mx-auto px-4 lg:px-8">
        <Header />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            <GalleryInfo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomCakeQuote;
