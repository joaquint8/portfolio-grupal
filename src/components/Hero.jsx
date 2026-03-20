import { ArrowRight, MessageCircle } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';

const Hero = () => {
  const { isDark } = useNavigation();

  return (
    <section id="inicio" className="pt-30 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandLime/10 border border-brandLime/20 text-[#d4ff00] text-[10px] font-bold uppercase mb-8">
            <span className="animate-pulse">✦</span> Custom web studio
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] mb-8 tracking-tighter">
            Diseñamos páginas web personalizadas que hacen crecer tu marca
          </h1>
          
          <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} text-lg mb-10 max-w-lg leading-relaxed`}>
            En Jenbla combinamos estrategia, diseño creativo y desarrollo a medida para crear experiencias web únicas.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contacto" className="btn-lime px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-101 transition-all text-black">
              Solicitar presupuesto <ArrowRight className="w-5 h-5" />
            </a>
            
            <a href="#" className={`flex items-center gap-3 px-8 py-4 rounded-2xl border transition-all font-bold ${
              isDark ? 'border-white/10 hover:bg-white/5' : 'border-slate-200 hover:bg-slate-50'
            }`}>
              <MessageCircle className="w-5 h-5 text-brandLime" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className={`aspect-[4/3] rounded-[48px] overflow-hidden border relative z-10 ${
            isDark ? 'border-white/10 bg-gradient-to-br from-white/5 to-transparent' : 'border-slate-200 bg-slate-100'
          }`}>
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800" 
              className="w-full h-full object-cover transition-all duration-700" 
              alt="Web Design"
            />
          </div>
          {isDark && (
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brandLime/5 blur-[100px] rounded-full"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;