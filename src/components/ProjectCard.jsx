import { ArrowRight } from 'lucide-react';

export const ProjectCard = ({ project }) => (
  <div className="project-card group cursor-pointer relative overflow-hidden aspect-[4/3] md:aspect-[16/11]">

    {/* Imagen */}
    <img 
      src={project.image} 
      className="w-full h-full object-cover transition-all duration-700" 
    />

    {/* Overlay */}
    <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-5 md:p-10">

      {/* Flecha (oculta → aparece en hover) */}
      <div className="absolute top-6 right-6 opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <div className="w-10 h-10 rounded-full bg-[#d4ff00] flex items-center justify-center shadow-lg">
          <ArrowRight className="w-5 h-5 text-black" />
        </div>
      </div>

      {/* Contenido */}
      <p className="text-brandPurple font-bold text-xs uppercase mb-2">
        {project.category}
      </p>

      <h4 className="text-xl md:text-3xl font-extrabold mb-2">
        {project.title}
      </h4>

      <p className="hidden md:block text-white/70 text-sm mb-3 opacity-0 translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {project.tags.map(tag => (
          <span 
            key={tag} 
            className="px-3 py-1 bg-white/10 rounded-full text-[10px] uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);