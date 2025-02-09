import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo-banco-sangre.jpg";

export const Cards = () => {

  const label = [
    { 
      name: 'Ciudad Nueva', 
      direccion: 'Av. Independencia No. 202, 3er piso. Despacho de productos sanguíneos', 
      horario: '24 horas x 7 días a la semana', 
      subtitle: 'Donación', 
      horarioSemana: { 
        semana: 'L-V: 8:00 am a 7:00 pm', 
        finDeSemana: 'S: 8:00 am a 1:00 pm' 
      }
    },
    
    { 
      name: 'Sede Central',
      title: 'Sede', 
      direccion: 'Av. Luperón No.3, esquina Mirador Sur', 
      subtitle: 'Despacho y Donación',  
      horarioSemana: { 
        semana: 'L-V: 8:00 am a 7:00 pm',
        finDeSemana: 'S: 8:00 am a 1:00 pm'  
      } 
    },
    { 
      name: 'MedicalNet', 
      title: 'Red médica', 
      direccion: 'C/ Rafael A. Sánchez No. 45, 1er piso', 
      subtitle: 'Despacho y Donación', 
      horarioSemana: { 
        semana: 'L-V: 8:00 am a 5:00 pm' 
      } 
    }
  ];

  return (

    <div className='mx-5 md:mx-20 py-10'>

         <div className='mx-5 md:mx-20'>
            <h2 className="text-red-500 text-4xl text-center">
               <span className="border-b-2 border-b-red-500">CENTROS DE DONACION</span>
            </h2>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 py-10">
        {label.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            
            <div className="bg-[#F4313F] rounded-lg shadow-lg p-5 w-full">

              <div className="flex flex-col items-center">

                <FontAwesomeIcon icon={faLocationDot} className="text-6xl text-white" />
                <span className="text-white text-xl font-bold py-2">{item.name}</span>
                <img className="w-32 my-3" src={logo} alt="Banco de Sangre" />

              </div>

            </div>

            <div className="mt-3 text-gray-800 flex flex-col items-start text-left w-full">
                <p className="text-lg font-semibold">{item.title || item.name}</p>
                <p className="text-sm">{item.direccion}</p>
                {item.horario && <p className="text-sm">{item.horario}</p>}
                <p className="text-lg font-semibold">{item.subtitle}</p>
                {item.horarioSemana?.semana && <p className="text-sm">{item.horarioSemana.semana}</p>}
                {item.horarioSemana?.finDeSemana && <p className="text-sm">{item.horarioSemana.finDeSemana}</p>}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
