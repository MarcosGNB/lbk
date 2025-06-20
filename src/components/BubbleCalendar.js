import React, { useState, useEffect } from 'react';

const BubbleCalendar = ({ onSelectDateTime }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Mock de horarios disponibles (puedes expandir esto con lógica real)
  const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const numDays = lastDay.getDate();
    const startDay = firstDay.getDay(); // 0 for Sunday, 1 for Monday

    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(null); // Empty slots for days before the 1st
    }
    for (let i = 1; i <= numDays; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const days = getDaysInMonth(currentMonth);

  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today to start of day

    if (date < today) {
      alert('No puedes seleccionar una fecha pasada.');
      return;
    }
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeClick = (time) => {
    if (!selectedDate) {
      alert('Por favor, selecciona una fecha primero.');
      return;
    }

    const now = new Date();
    const [hour, minute] = time.split(':').map(Number);
    const selectedDateTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), hour, minute);

    if (selectedDateTime < now) {
      alert('No puedes seleccionar una hora pasada para la fecha actual.');
      return;
    }

    setSelectedTime(time);
    onSelectDateTime(selectedDate, time);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <button onClick={goToPreviousMonth} className="text-gray-600 hover:text-black font-bold text-xl">&lt;</button>
        <h3 className="text-xl font-semibold text-gray-800">
          {currentMonth.toLocaleString('es-ES', { month: 'long', year: 'numeric' })}
        </h3>
        <button onClick={goToNextMonth} className="text-gray-600 hover:text-black font-bold text-xl">&gt;</button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-500 mb-4">
        {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const isPastDay = day && day < today;

          return (
            <div
              key={index}
              className={`p-2 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200
                ${day ? 'bg-gray-100 hover:bg-gray-200' : 'bg-transparent cursor-default'}
                ${selectedDate && day && day.toDateString() === selectedDate.toDateString() ? 'bg-black text-white' : ''}
                ${isPastDay ? 'opacity-50 cursor-not-allowed' : ''}
              `}
              onClick={() => day && !isPastDay && handleDateClick(day)}
            >
              {day ? day.getDate() : ''}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div className="mt-6 border-t pt-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Horarios Disponibles para {selectedDate.toLocaleDateString('es-ES')}:</h4>
          <div className="grid grid-cols-3 gap-3">
            {availableTimes.map(time => {
              const now = new Date();
              const [hour, minute] = time.split(':').map(Number);
              const selectedDateTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), hour, minute);
              const isPastTime = selectedDateTime < now;

              return (
                <button
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  className={`px-4 py-2 rounded-full border transition-all duration-200
                    ${selectedTime === time ? 'bg-black text-white border-black' : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'}
                    ${isPastTime ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                  disabled={isPastTime}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default BubbleCalendar;

// DONE