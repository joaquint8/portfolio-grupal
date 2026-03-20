import { Sun, Moon, Globe } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';

const Navbar = () => {
  const { isDark, lang, toggleTheme, toggleLang, t } = useNavigation();
  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-opacity-80 backdrop-blur-md transition-colors" id="main-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex flex-col justify-center">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-brandLime font-black text-xl leading-none">Jenbla</span>
          </div>
          
          {/* Links de navegación (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#servicios" className="text-xs font-bold opacity-70 hover:opacity-100 transition-opacity uppercase tracking-widest">{t.n1}</a>
            <a href="#portafolio" className="text-xs font-bold opacity-70 hover:opacity-100 transition-opacity uppercase tracking-widest">{t.n2}</a>
            <a href="#nosotros" className="text-xs font-bold opacity-70 hover:opacity-100 transition-opacity uppercase tracking-widest">{t.n3}</a>
            <a href="#testimonios" className="text-xs font-bold opacity-70 hover:opacity-100 transition-opacity uppercase tracking-widest">{t.n4}</a>
            <a href="#contacto" className="text-xs font-bold opacity-70 hover:opacity-100 transition-opacity uppercase tracking-widest">{t.n5}</a>
          </div>

          {/* Acciones: Idioma, Tema y Botón */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang} 
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-all text-xs font-bold text-gray-300 cursor-pointer"
            >
              <Globe className="w-4 h-4 text-white" />
              {lang === 'es' ? (
                <>ES</>
              ) : (
                <> EN</>
              )}
            </button>

            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-all cursor-pointer"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-brandLime" />
              ) : (
                <Moon className="w-4 h-4 text-brandPurple" />
              )}
            </button>

            <a href="#contacto" className="btn-lime px-6 py-2.5 rounded-xl font-bold text-xs hover:scale-105 transition-transform">
              {t.btn}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;