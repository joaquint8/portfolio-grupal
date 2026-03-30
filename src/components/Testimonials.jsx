import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';
import { testimonials } from '../constants/testimonialsData';

const Testimonials = () => {
  const { isDark } = useNavigation();
  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setIsFading(false);
    }, 400);
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsFading(false);
    }, 400);
  };

  return (
    <section id="testimonios" className={`py-24 px-6 border-t ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
      <div className="max-w-7xl mx-auto">
        <span className="text-[#d4ff00] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
          Testimonios
        </span>
        <h2 className={`text-4xl md:text-5xl font-extrabold mb-16 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Lo que dicen nuestros clientes
        </h2>

        <div className={`glass-card p-8 md:p-10 rounded-[32px] relative overflow-hidden transition-colors ${!isDark && 'bg-slate-50 border-slate-200'
          }`}>
          <div
              className={`transition-all duration-300 transform ${
                isFading ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'
              }`}
            >
              <p
                className={`text-lg md:text-2xl font-medium italic mb-8 leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-slate-700'
                }`}
              >
                {testimonials[current].text}
              </p>

              <div className="flex justify-between items-center">
                <div>
                  <h4
                    className={`text-lg font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {testimonials[current].name}
                  </h4>
                  <p className="text-[#d4ff00] font-bold uppercase text-[9px] tracking-widest mt-1">
                    {testimonials[current].role}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className={`cursor-pointer w-10 h-10 rounded-full border flex items-center justify-center transition-all group ${
                      isDark
                        ? 'border-white/10 hover:bg-white/5'
                        : 'border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <ChevronLeft
                      className={`w-4 h-4 transition-transform ${
                        isDark ? 'text-white' : 'text-slate-600'
                      }`}
                    />
                  </button>

                  <button
                    onClick={handleNext}
                    className={`cursor-pointer w-10 h-10 rounded-full border flex items-center justify-center transition-all group ${
                      isDark
                        ? 'border-white/10 hover:bg-white/5'
                        : 'border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isDark ? 'text-white' : 'text-slate-600'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;