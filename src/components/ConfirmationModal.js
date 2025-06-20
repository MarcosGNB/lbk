import React, { useState, useEffect } from 'react';
import BubbleCalendar from './BubbleCalendar';

const ConfirmationModal = ({ isOpen, onClose, selectedServices, onConfirmReservation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('cash'); // Default payment method
  const [showBankDetails, setShowBankDetails] = useState(false);

  if (!isOpen) return null;

  const total = selectedServices.reduce((sum, service) => {
    const price = parseFloat(service.price.replace('.', '').replace(' Gs', ''));
    return sum + price;
  }, 0);

  const handleDateTimeSelection = (date, time) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const handlePayAndConfirm = () => {
    if (!selectedDate || !selectedTime) {
      alert('Por favor, selecciona una fecha y hora para tu reserva.');
      return;
    }
    if (!paymentMethod) {
      alert('Por favor, selecciona un método de pago.');
      return;
    }

    const reservationDetails = {
      services: selectedServices,
      date: selectedDate.toLocaleDateString('es-ES'),
      time: selectedTime,
      total: total,
      paymentMethod: paymentMethod,
    };

    if (paymentMethod === 'cash') {
      const message = `¡Hola! Quiero reservar los siguientes servicios para el ${reservationDetails.date} a las ${reservationDetails.time}:\n\n${selectedServices.map(s => `- ${s.name} (${s.price})`).join('\n')}\n\nTotal: ${total.toLocaleString('es-PY')} Gs.\n\n¡Espero tu confirmación!`;
      const whatsappUrl = `https://wa.me/595994116266?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      onConfirmReservation(reservationDetails);
      onClose();
    } else if (paymentMethod === 'card') {
      setShowBankDetails(true);
    }
  };

  const handleCloseBankDetails = () => {
    setShowBankDetails(false);
    onConfirmReservation({
      services: selectedServices,
      date: selectedDate.toLocaleDateString('es-ES'),
      time: selectedTime,
      total: total,
      paymentMethod: paymentMethod,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Confirmar Reserva</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none p-1"
          >
            &times;
          </button>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Servicios:</h3>
          <ul className="space-y-1 mb-4 max-h-32 overflow-y-auto border-b pb-2">
            {selectedServices.map((service, index) => (
              <li key={index} className="flex justify-between items-center text-sm">
                <span className="text-gray-700">{service.name}</span>
                <span className="font-semibold text-gray-800">{service.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="block text-gray-700 text-sm font-bold mb-1">
            Fecha y Hora:
          </h4>
          <div className="max-h-[200px] overflow-y-auto">
            <BubbleCalendar onSelectDateTime={handleDateTimeSelection} />
          </div>
          {selectedDate && selectedTime && (
            <p className="mt-2 text-center text-sm font-semibold text-gray-800">
              Seleccionado: {selectedDate.toLocaleDateString('es-ES')} a las {selectedTime}
            </p>
          )}
        </div>

        <div className="mb-4">
          <h4 className="block text-gray-700 text-sm font-bold mb-1">
            Método de Pago:
          </h4>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-black h-4 w-4"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="ml-2 text-gray-700 text-sm">Efectivo</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-black h-4 w-4"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="ml-2 text-gray-700 text-sm">Tarjeta(transferencia)</span>
            </label>
          </div>
        </div>

        <div className="flex justify-between items-center border-t pt-3 mt-3">
          <span className="text-lg font-bold text-gray-900">Total:</span>
          <span className="text-xl font-extrabold text-black">{total.toLocaleString('es-PY')} Gs</span>
        </div>

        <button
          onClick={handlePayAndConfirm}
          className="w-full bg-black text-white py-2 rounded-lg mt-4 font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm"
        >
          Pagar y Confirmar
        </button>
      </div>

      {showBankDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-4 w-full max-w-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Datos Bancarios</h2>
              <button onClick={handleCloseBankDetails} className="text-gray-500 hover:text-gray-700 text-2xl leading-none p-1">
                &times;
              </button>
            </div>
            <p className="text-gray-700 mb-3 text-sm">Por favor, realiza la transferencia a:</p>
            <div className="bg-gray-100 p-3 rounded-lg mb-4">
              <p className="font-semibold text-gray-800 text-sm">Alias C.I:</p>
              <p className="text-black text-base font-bold mb-1">6781184</p>
              <p className="font-semibold text-gray-800 text-sm">Banco:</p>
              <p className="text-black text-base font-bold">"Ueno bank S.A"</p>
            </div>
            <p className="text-gray-600 text-xs text-center mb-3">Envía el comprobante por WhatsApp para confirmar.</p>
            <button
              onClick={handleCloseBankDetails}
              className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmationModal;