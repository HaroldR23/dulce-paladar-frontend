import RightContent from './RightContent';
import LeftContent from './LeftContent';
import ScrollIndicator from './ScrollIndicator';
import useIsMobile from '../../hooks/useIsMobile';


const Hero = () => {
  const isMobile = useIsMobile();
  console.log('isMobile:', isMobile);
  return (
    <section className={`relative min-h-screen flex items-center ${isMobile ? 'pt-60' : 'pt-20'} overflow-hidden`}>
      {/* Background with gradient overlay */}
      {/* <div className="absolute inset-0 bg-linear-to-br from-[#FFF8F0] via-[#FAF7F2] to-[#FFE5E5]"> */}
      <div className="absolute inset-0 bg-linear-to-br from-[#f1ddc5] via-[#eedab9] to-[#f3c0a2]">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sprinkles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="#FF6B6B" /> 
                <circle cx="60" cy="40" r="2" fill="#E6E6FA" />
                <circle cx="40" cy="80" r="2" fill="#FFDAB9" />
                <circle cx="80" cy="60" r="2" fill="#FFE5E5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sprinkles)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <LeftContent />
          <RightContent />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
export default Hero;