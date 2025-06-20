import React from 'react';
import ReservationModal from './ReservationModal'; // Importar el modal

const PriceSection = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedServices, setSelectedServices] = React.useState([]);

  const services = [
    { name: 'Corte de Cabello Clásico', price: '50.000 Gs', description: 'El corte que nunca pasa de moda, con un acabado impecable y lavado relajante para un look fresco y pulcro.' },
    { name: 'Diseño de Barba Premium', price: '30.000 Gs', description: 'Moldeado y arreglo de barba con toallas calientes, aceites esenciales y un toque de navaja para una definición perfecta.' },
    { name: 'Paquete Kiki LBK', price: '75.000 Gs', description: 'La experiencia completa: corte de cabello a tu estilo y un diseño de barba que te hará lucir espectacular.' },
    { name: 'Afeitado Tradicional', price: '40.000 Gs', description: 'Un ritual de afeitado con navaja, espuma caliente y bálsamos post-afeitado para una piel suave y sin irritaciones.' },
    { name: 'Tratamiento Capilar Revitalizante', price: '60.000 Gs', description: 'Nutrición profunda para tu cabello, dejándolo fuerte, brillante y con una vitalidad que se nota.' },
    { name: 'Perfilado de Cejas', price: '20.000 Gs', description: 'Un toque sutil para enmarcar tu mirada, eliminando el exceso y definiendo la forma natural de tus cejas.' },
  ];

  const handleReserveClick = (service) => {
    setSelectedServices((prevServices) => [...prevServices, service]);
    setIsModalOpen(true);
  };

  const handleRemoveService = (indexToRemove) => {
    setSelectedServices((prevServices) =>
      prevServices.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Nuestros Precios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-4">{service.name}</h3>
              <p className="text-5xl font-extrabold text-yellow-400 mb-4">{service.price}</p>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <button 
                onClick={() => handleReserveClick(service)}
                className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 shadow-md"
              >
                Reservar Ahora
              </button>
            </div>
          ))}
        </div>
      </div>
      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedServices={selectedServices}
        onRemoveService={handleRemoveService}
      />
    </section>
  );
};

export default PriceSection;

// DONE