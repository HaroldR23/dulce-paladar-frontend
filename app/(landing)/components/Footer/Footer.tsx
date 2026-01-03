import BottomBar from './BottomBar';
import Map from './Map';
import ContactInfo from './ContactInfo';
import QuickLinks from './QuickLinks';
import BrandSection from './BrandSection';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-linear-to-br from-[#2D2D2D] to-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:justify-evenly gap-12 mb-12">
          <BrandSection />
          <QuickLinks />
          <ContactInfo />
        </div>
        <Map />
       </div>
      <BottomBar />
    </footer>
  );
}

export default Footer;
