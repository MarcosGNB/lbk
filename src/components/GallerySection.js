import React, { useState } from 'react';

const GallerySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Imágenes desde la carpeta public/images
  const images = [
    "/images/corte1.png",
    "/images/corte2.png",
    "/images/corte3.png",
    "/images/corte4.png",
    "/images/corte5.png",
    "/images/corte6.png",
  ];

  const socialMedia = [
    { name: "Instagram", url: "https://instagram.com/labarberiadekiki_.", icon: "/images/instagram-icon.png", color: "bg-pink-600" },
    { name: "Facebook", url: "https://facebook.com/La Barberia De Kiki", icon: "/images/facebook-icon.png", color: "bg-blue-600" },
    { name: "TikTok", url: "https://tiktok.com/@labarberiadekiki", icon: "/images/tiktok-icon.png", color: "bg-black" },
    { name: "WhatsApp", url: "https://wa.me/0994116266", icon: "/images/whatsapp-icon.png", color: "bg-green-500" }
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-amber-400 mb-4 font-serif">Galería de Estilos</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          Descubre nuestros cortes de cabello y barba premium para hombres modernos.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:shadow-amber-500/20"
            >
              <div className="aspect-w-4 aspect-h-5">
                <img 
                  src={src} 
                  alt={`Corte de cabello ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Estilo {index + 1}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={openModal}
          className="mt-12 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/30 hover:scale-105"
        >
          Ver Más Trabajos
        </button>
      </div>

      {/* Ventana Modal de Redes Sociales */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl max-w-md w-full overflow-hidden border border-amber-400/30">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-300 hover:text-amber-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-amber-400 mb-2 font-serif">Síguenos en Redes</h3>
              <p className="text-gray-300 mb-6">Mira más de nuestros trabajos y agenda tu cita</p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} flex items-center justify-center p-4 rounded-xl text-white hover:opacity-90 transition-opacity transform hover:scale-105`}
                  >
                    <img src={social.icon} alt={social.name} className="w-8 h-8 mr-2" />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-400">O escríbenos directamente:</p>
                <a 
                  href="tel:+1234567890" 
                  className="inline-block mt-2 px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-colors"
                >
                  📞 Llamar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;