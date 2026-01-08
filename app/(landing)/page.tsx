'use client';

import AboutUs from './components/AboutUs/AboutUs';
import Catalog from './components/Catalog/Catalog';
import CustomCakeQuote from './components/CustomCakeQuote/CustomCakeQuote';
import Hero from './components/Hero/Hero';


const LandingPage = () => {
  return (
    <div> 
      <Hero />
      <Catalog />
      <CustomCakeQuote />
      <AboutUs />
    </div>
  );
}
export default LandingPage;