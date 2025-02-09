import blood from '../assets/blood.png';
import hands from '../assets/hands.png';
import truck from '../assets/truck.png';

export const Services = () => {
    
    const info = [
        { src: blood, title: 'Banco de Sangre', description: 'Realizamos la recolección, análisis, procesamiento y almacenamiento de la sangre y sus componentes garantizando el cumplimiento de estrictos controles de calidad.', buttonLabel: 'REGÍSTRATE' },
        { src: hands, title: 'Club de Donantes', description: 'Sé parte de nuestro Club de donantes voluntarios de sangre y salva vidas.', buttonLabel: 'VER MÁS' },
        { src: truck, title: 'Jornadas de Donación', description: 'Nos trasladamos hacia su lugar de trabajo o estudios, con todo el equipamiento adecuado para obtener las donaciones de sangre en óptimas condiciones.', buttonLabel: 'VER MÁS' }
    ];

    return (
        <>
            <div className='mx-5 md:mx-20 pb-10'>
                <h2 className="text-red-500 text-4xl text-center">
                    <span className="border-b-2 border-b-red-500">NUESTROS SERVICIOS</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 px-5 md:px-20">
                {info.map((service, index) => (
                    <div key={index} className="flex flex-col items-center p-5 min-h-[300px]">
                        <img src={service.src} alt={service.title} className="mb-4" />
                        
                       
                        <div className="flex flex-col flex-grow justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                            <p className="text-sm text-gray-600 my-2 flex-grow">{service.description}</p>
                            
                           
                            <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition sm:w-1/2 lg:w-full">
                                {service.buttonLabel}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
