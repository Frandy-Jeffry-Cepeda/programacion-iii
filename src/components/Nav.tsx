import { Link, useLocation } from "react-router-dom";


export const Nav = () => {

  const location = useLocation();

  const isLocationActive = location.pathname; 

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

  <nav>
      <ul className="w-full gap-5 items-center justify-center hidden sm:hidden md:hidden lg:flex">
          {navItems.map((item, index) => (
              <li key={index} className={`${isLocationActive === item.link ? "border-b-2 border-b-white" : ""}`}>
                  <Link to={item.link} className="text-white">
                      {item.name}
                  </Link>
              </li>
          ))}
      </ul>
  </nav>

    
  );
};
