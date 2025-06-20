import React from 'react';
import ConfirmationModal from './ConfirmationModal';

const ReservationModal = ({ isOpen, onClose, selectedServices, onRemoveService }) => {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = React.useState(false);

  if (!isOpen) return null;

  const total = selectedServices.reduce((sum, service) => {
    const price = parseFloat(service.price.replace('.', '').replace(' Gs', ''));
    return sum + price;
  }, 0);

  const handleConfirmReservationClick = () => {
    if (selectedServices.length > 0) {
      setIsConfirmationModalOpen(true);
    } else {
      alert('Por favor, agrega al menos un servicio para confirmar tu reserva.');
    }
  };

  const handleReservationConfirmed = (reservationDetails) => {
    console.log('Reserva Confirmada:', reservationDetails);
    // No mostramos el alert aquí, ya que el modal de confirmación o WhatsApp se encarga de la retroalimentación
    onClose(); // Cerrar el modal principal
    // Aquí podrías enviar los datos de la reserva a un backend o manejarlos de otra forma
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md transform transition-all duration-300 scale-100 opacity-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Tu Reserva</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl leading-none">
            &times;
          </button>
        </div>

        {selectedServices.length === 0 ? (
          <p className="text-gray-600 text-center">No has agregado ningún servicio.</p>
        ) : (
          <>
            <ul className="space-y-4 mb-6 max-h-60 overflow-y-auto">
              {selectedServices.map((service, index) => (
                <li key={index} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-semibold text-gray-800">{service.name}</p>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold text-gray-900 mr-4">{service.price}</span>
                    <button
                      onClick={() => onRemoveService(index)}
                      className="text-red-500 hover:text-red-700 text-lg"
                      title="Eliminar"
                    >
                      &times;
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center border-t pt-4 mt-4">
              <span className="text-xl font-bold text-gray-900">Total:</span>
              <span className="text-2xl font-extrabold text-black">{total.toLocaleString('es-PY')} Gs</span>
            </div>

            <button
              onClick={handleConfirmReservationClick}
              className="w-full bg-black text-white py-3 rounded-lg mt-6 font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Confirmar Reserva
            </button>
          </>
        )}
      </div>

      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        selectedServices={selectedServices}
        onConfirmReservation={handleReservationConfirmed}
      />
    </div>
  );
};

export default ReservationModal;

// DONE