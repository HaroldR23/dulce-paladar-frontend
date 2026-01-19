import { MessageCircle } from "lucide-react";
import { getWhatsappUrl } from "../contants/data";

const WhatsAppContact = () => {
  const message = "Hola, me gustaría obtener más información.";

  return (
    <a
      href={getWhatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-8 right-6 w-12 h-12 bg-linear-to-br from-green-400 to-emerald-500 rounded-full shadow-2xl flex items-center justify-center text-white z-30 hover:shadow-green-500/50 transition-shadow"
    >
      <MessageCircle />
      <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppContact;
