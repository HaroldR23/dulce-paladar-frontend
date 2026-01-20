const BottomBar = () => {
  return (
  <div className="border-t border-white/10">
    <div className="container mx-auto px-4 lg:px-8 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-white/50 text-sm text-center md:text-left">
          © 2025 Dulce Paladar. Todos los derechos reservados.
        </p>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="text-white/50 hover:text-[#E94FA3] transition-colors duration-200">
            Términos y condiciones
          </a>
          <a href="#" className="text-white/50 hover:text-[#E94FA3] transition-colors duration-200">
            Política de privacidad
          </a>
        </div>
      </div>
    </div>
  </div>
  )
};

export default BottomBar;
