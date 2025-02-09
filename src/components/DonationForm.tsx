import { useState } from "react";

export const DonationForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    fecha: "",
    centro: "",
    cantidadDonantes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="max-w-lg w-full mx-5 p-6 md:p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-red-500 text-center mb-4">
        Formulario de Donación
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre y Apellidos
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-400 outline-none"
            placeholder="Escriba su respuesta"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-400 outline-none"
            placeholder="Escriba su respuesta"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-400 outline-none"
            placeholder="Escriba su respuesta"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Fecha</label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Centro de Donación</label>
          <select
            name="centro"
            value={formData.centro}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-400 outline-none"
          >
            <option value="">Seleccione una opción</option>
            <option value="Sede Central">Sede Central</option>
            <option value="Ciudad Nueva">Ciudad Nueva</option>
            <option value="MedicalNet">MedicalNet</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cantidad de Donantes</label>
          <select
            name="cantidadDonantes"
            value={formData.cantidadDonantes}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-400 outline-none"
          >
            <option value="">Seleccione una opción</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
            <option value="Otras">Otras</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
