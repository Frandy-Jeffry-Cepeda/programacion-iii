import novedades from '../assets/novedades1.jpg';
import novedades2 from '../assets/novedades2.jpg';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

export const Novedades = () => {

  const novedadesData = [
    {
      imagen: novedades,
      titulo: "Mitos y Verdades sobre la Donación de Sangre",
      fecha: "9 enero 2025",
      texto: "La donación de sangre es un acto altruista que puede salvar muchas vidas, pero a pesar de su importancia, existen muchos mitos y malentendidos que pueden disuadir a las personas de donar."
    },
    {
      imagen: novedades2,
      titulo: "¡Esta Navidad, tu donación trae el doble de alegría!",
      fecha: "6 diciembre 2024",
      texto: "Este mes de diciembre tu donación voluntaria te regala bonos en CCN o Zara con un valor de RD$5,000 pesos para 10 participantes. ¿Cómo participar? Es muy sencillo. Solo debes realizar una."
    }
  ];

  return (
    <>
      <div className="w-full bg-[#F4F4F4] flex justify-between flex-col lg:flex-row px-5 gap-10 lg:px-20 py-10">
        <div className="w-full h-screen lg:w-1/2 mb-8 lg:mb-0">
          <iframe
            className="w-full h-[100%] md:h-[80%]"
            src="https://www.youtube.com/embed/DPpGPWScbLc"
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
  
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4">
          <h2 className="text-red-500 text-4xl font-bold text-center lg:text-left">
            <span className="border-b-2 border-b-red-500">NUESTRO BANCO DE SANGRE</span>
          </h2>
          <p className="text-lg max-w-3xl text-center lg:text-left">
            Como BANCO DE SANGRE, tenemos la misión de desarrollar y asegurar una base de datos de personas, que de manera voluntaria ofrezcan donar su sangre a otras, amigos o familiares, que por determinada situación urgente de salud, lo requieran.
          </p>
        </div>
      </div>

      <div className="bg-[#F4F4F4] py-10">
        <div className="mx-5 lg:mx-20">
          <h2 className="text-red-500 text-4xl text-center lg:text-left">
            <span className="border-b-2 border-b-red-500">NOVEDADES</span>
          </h2>
        </div>

        <div className="mx-5 lg:mx-20 mt-10 space-y-10">

            {novedadesData.map((item, index) => (

                <div key={index} className="flex flex-col lg:flex-row items-start gap-8 mb-8">
                    <div className="w-full lg:w-1/3 h-auto flex items-center justify-center">
                        <img src={item.imagen} alt={`Novedad ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
                    </div>

                    <div className="w-full lg:w-2/3 lg:text-left">
                        <h3 className="text-xl font-bold">{item.titulo}</h3>
                        <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCalendar} className="text-red-500" />
                        <span className="text-lg text-gray-700">{item.fecha}</span>
                        </div>
                        <p className="text-lg mt-4">{item.texto}</p>
                    </div>
                </div>
            ))}

            <div className="flex justify-center mt-8">
                <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Ver más novedades
                </button>
            </div>
        </div>


      </div>
    </>
  );
};
