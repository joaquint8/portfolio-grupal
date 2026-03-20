import { useNavigation } from '../hooks/useNavigation';
import { services } from '../constants/servicesData';

const Services = () => {
  const { isDark } = useNavigation();

  return (
    <section id="servicios" className={`pt-20 px-6 border-t ${isDark ? 'border-white/5' : 'border-white-100'}`}>
      <div className="max-w-7xl mx-auto">
        <span className="text-[#d4ff00] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
          Servicios
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight">
          Servicios para diferenciarte
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="glass-card p-8 rounded-[28px] group hover:border-[#d4ff00]/30 transition-all cursor-default"
            >
              <span className="text-[20px] font-mono text-[#d4ff00] font-bold mb-6 block">
                {service.id}
              </span>

              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {service.title}
              </h3>

              <p className={`${isDark ? 'text-gray-500' : 'text-slate-500'} leading-relaxed text-sm`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;