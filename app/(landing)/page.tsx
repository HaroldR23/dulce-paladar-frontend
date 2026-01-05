'use client';

import AboutUs from './components/AboutUs/AboutUs';
import Catalog from './components/Catalog/Catalog';
import Hero from './components/Hero/Hero';


const LandingPage = () => {
  return (
    <div> 
      <Hero />
      <Catalog />
      <AboutUs />
    </div>
  );
}
export default LandingPage;