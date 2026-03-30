import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const media = project.media || [project.image];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % media.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);

  useEffect(() => {
    // cuando se crear el componente, activamos la animación de entrada
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    // animación de salida antes de cerrar
    setIsVisible(false);
    setTimeout(onClose, 300); // espera 300ms para que se vea la animación
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
      {/* fondo oscuro con fade */}
      <div
        className={`absolute inset-0 bg-[#0a0f1c]/60 backdrop-blur-xl transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
        onClick={handleClose}
      ></div>
      
      {/* contenedor principal del Modal con animación */}
      <div className={`bg-[#0a0f1c]/40 backdrop-blur-2xl border border-white/10 w-[1150px] h-[460px] max-w-full max-h-[90vh] overflow-hidden rounded-[24px] relative z-10 grid lg:grid-cols-2 shadow-2xl transform transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        
        {/* lado izquierdo: Carrusel */}
        <div className="relative bg-black/60 h-full overflow-hidden flex items-center justify-center">
          {media[currentIndex]?.endsWith('.mp4') ? (
            <video
              src={media[currentIndex]}
              controls
              className="w-full h-full object-contain transition-opacity duration-300"
            />
          ) : (
            <img
              src={media[currentIndex]}
              alt={project.title}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          )}

          {media.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all text-white border border-white/10"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all text-white border border-white/10"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}
        </div>

        {/* lado derecho: Contenido */}
        <div className="p-12 flex flex-col justify-between relative bg-white/5">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <div>
            <h3 className="text-4xl font-extrabold mb-6 tracking-tighter text-white">
              {project.title}
            </h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* botones de acción */}
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href={project.demoUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-5 px-8 rounded-2xl font-bold text-lg text-center flex items-center justify-center gap-3 bg-[#d4ff00] text-black shadow-[0_0_25px_rgba(212,255,0,0.25)] hover:scale-[1.03] transition-transform"
            >
              Proyecto <ExternalLink className="w-5 h-5" />
            </a>
            
            <a
              href={project.repoUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-5 px-8 rounded-2xl border border-white/20 font-bold text-lg text-center flex items-center justify-center gap-3 hover:bg-white/10 transition-all text-white uppercase tracking-wider"
            >
              Repositorio <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;