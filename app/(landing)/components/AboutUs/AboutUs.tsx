import Header from './Header';
import ImageComponent from './Image';
import Content from './Content';
import Stats from './Stats';

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-20 bg-linear-to-br from-[#f1ddc5] via-[#eedab9] to-[#f3c0a2]">
      <div className="container mx-auto px-4 lg:px-8">
        <Header />
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ImageComponent />
            <Content />
          </div>
        </div>
      <Stats />
      </div>
    </section>
  );
}

export default AboutUs;
