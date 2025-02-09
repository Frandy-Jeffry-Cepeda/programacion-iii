import certificaciones from '../assets/certificaciones.jpg';

export const Certification = () => {
  return (

    <div className="bg-[#F4F4F4]">

        <div className="mx-5 md:mx-20 py-10 flex flex-col items-center">
        
        <h2 className="text-red-500 text-4xl text-center mb-6">
            <span className="border-b-2 border-b-red-500">CERTIFICACIONES</span>
        </h2>

        <div className="w-full max-w-3xl flex justify-center">
            <img 
            src={certificaciones} 
            alt="Certificaciones de calidad" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
        </div>

        </div>
    </div>
  );
};
