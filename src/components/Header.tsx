import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';

import location from "../assets/location-icon.png";
import phone from "../assets/phone-icon.png";
import R from "../assets/R-icon.jpg";
import R2 from "../assets/R2-icon.jpg";
import logo from "../assets/logo-banco-sangre.jpg";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navItems = [
    { name: "Inicio", link: "/" },
    { name: "Nosotros", link: "/about" },
    { name: "Servicios", link: "/services" },
    { name: "Reserva una cita", link: "/appointment" },
    { name: "Centros", link: "/centers" },
    { name: "Club de Donantes", link: "/donors" },
    { name: "Preguntas frecuentes", link: "/faq" },
    { name: "Novedades", link: "/news" },
  ];

  return (
    <>
      <div className="align-middle bg-[#F2F2F2] h-10 hidden md:hidden lg:flex">
        <div className="flex text-gray-500 gap-5 justify-between w-full lg:mx-5 xl:mx-20">
          <div className="flex gap-2 justify-center items-center lg:mx-10">
            <img className="object-cover h-5 md:h-4" src={location} alt="location-icon" />
            <span>Sede Central: Av. Luperón No. 3, Esq. Av. Mirador Sur</span>
            <img className="object-cover h-5 md:h-4" src={phone} alt="phone-icon" />
            <span>(809) 221-5545, ext.:2135 y 2081 </span>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <div className="flex gap-4 mx-5">
              <img className="object-cover h-8" src={R} alt="phone-icon" />
              <img className="object-cover h-8" src={R2} alt="phone-icon" />
            </div>

            <div className="flex text-red-500 gap-2 text-xl bg-[#EAEAEA] h-full items-center px-4">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sticky top-0 z-10 bg-[#F4313F] md:h-25 lg:h-36">
        <div className="flex justify-between mx-5 md:mx-20 py-4">
          <img src={logo} alt="logo" />
          <div className="flex items-center gap-5">
            <div className="relative items-center hidden md:flex">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute left-44 text-red-500 text-lg"
              />
              <input
                type="search"
                placeholder="Buscar..."
                className="pl-5 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                aria-label="Buscar"
              />
            </div>

            <div className="block md:hidden text-2xl text-white">
              <button onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
        </div>

        {isNavOpen && (
          <div className="absolute top-25 left-0 w-full bg-[#F4313F] text-white py-4 px-5 md:hidden">
            <ul className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    onClick={() => setIsNavOpen(false)}
                    className="text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="hidden md:block">
          <Nav />
        </div>
      </div>
    </>
  );
};
