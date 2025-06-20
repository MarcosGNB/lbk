import React from 'react';

const MapSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-amber-400 mb-4 font-serif">Visítanos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos en el corazón de Caacupé
          </p>
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.102057764178!2d-57.1512344!3d-25.3926686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945c3338fb21856b%3A0x67062662fd713de1!2sLa%20barberia%20de%20kiki%202.0!5e0!3m2!1ses-419!2spy!4v1718827659458!5m2!1ses-419!2spy"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación exacta de La Barbería de Kiki 2.0 en Caacupé"
            className="block"
          ></iframe>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-gray-800/80 px-6 py-3 rounded-full border border-amber-400/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300">
              <span className="font-medium text-amber-300">Dirección exacta:</span> Calle Eusebio Ayala casi Mcal. López, Caacupé
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;