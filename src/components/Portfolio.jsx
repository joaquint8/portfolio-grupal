import { useState } from 'react';
import { useNavigation } from '../hooks/useNavigation';
import { ProjectCard } from './ProjectCard';
import { projects } from '../constants/portfolioData';
import ProjectModal from './ProjectModal';

const Portfolio = () => {
  const { isDark } = useNavigation();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portafolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[#d4ff00] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
            Portafolio
          </span>
          <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Nuestros últimos trabajos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;