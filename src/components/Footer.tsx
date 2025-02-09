import logo from "../assets/logo-banco-sangre.jpg";
import location from "../assets/location-icon.png";
import phone from "../assets/phone-icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  

export const Footer = () => {
    
  return (

    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <div className="mb-4">
              <img src={logo} alt="Logo Banco de Sangre" className="mx-auto lg:mx-0 h-16" />
            </div>
            <p className="text-sm">Copyright 2021. Todos los derechos reservados a Referencia Banco de Sangre.</p>
            <p className="text-sm mt-2">
              <span>Política de Privacidad | </span>
              <span>Términos de Uso</span>
            </p>
            <div className="mt-4">
              <span>Síguenos: </span>
              <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600 mr-4">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://facebook.com" className="text-blue-400 hover:text-blue-600 mr-4">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://instagram.com" className="text-blue-400 hover:text-blue-600">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center mb-4">
              <img className="object-cover h-5 md:h-6 mr-2" src={location} alt="Location Icon" />
              <span className="text-sm">Sede Central: Av. Luperón No. 3, Esq. Av. Mirador Sur</span>
            </div>
            <div className="flex items-center mb-4">
              <img className="object-cover h-5 md:h-6 mr-2" src={phone} alt="Phone Icon" />
              <span className="text-sm">(809) 221-5545, ext.:2135 y 2081</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span className="text-sm">contacto@bancosangre.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
