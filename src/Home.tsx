import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import hero from './assets/hero-image.jpg';
import hero2 from './assets/hero-image-2.jpg';
import { Cards } from "./components/Cards";
import { Services } from "./components/Services";
import { Form } from "./components/Form";
import { Certification } from "./components/Certification";
import { Novedades } from "./components/Novedades";
import { Footer } from "./components/Footer";



function Home() {

  const isMobile = window.innerWidth < 768;

  const [opacity, setOpacity] = useState(1);

  const [carrousel, setCarrousel] = useState(hero);

  useEffect(() => {
    const interval = setInterval(() => {

      setOpacity(0); 

      setTimeout(() => {
        setCarrousel(prev => (prev === hero ? hero2 : hero));
        setOpacity(1);
      }, 500); 

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      
      <div
        className={`w-full bg-cover bg-center transition-opacity duration-500`}
        style={{
          backgroundImage: `url(${carrousel})`,
          opacity: opacity,
          height: isMobile ? "125px" : "500px", 
        }}
      />

      <main>

        <Cards/>

        <Services/>

        <Form/>

        <Certification/>

        <div className="py-10 flex flex-col items-center space-y-5 px-4">

          <h2 className="text-red-500 text-2xl sm:text-3xl font-bold text-center">
            SOBRE REFERENCIA BANCO DE SANGRE
          </h2>

          <p className="w-full sm:w-4/5 md:w-2/3 lg:w-2/3 xl:w-2/4 text-base sm:text-lg text-center">
            Referencia Banco de Sangre, cuenta con la acreditación internacional AABB (Asociación Americana de Bancos de Sangre).
            Esta acreditación garantiza nuestro compromiso en proveer al paciente un servicio y producto de alto nivel.
          </p>

          <span className="text-red-500 text-xl sm:text-2xl text-center">
            Somos Acreditados por la Asociación Americana de Bancos De Sangre
          </span>

        </div>

        <Novedades/>

      </main>
      
      <Footer/>

    </>
  );
}

export default Home;
