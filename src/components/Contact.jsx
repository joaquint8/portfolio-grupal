import { Mail, MapPin, Clock, Send } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';

const Contact = () => {
  const { isDark } = useNavigation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <>
      <section id="contacto" className="py-10 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-left mb-16">
            <span className="text-[#d4ff00] font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
              CONTACTO
            </span>

            <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              ¿Tenes un <span className="text-[#d4ff00] italic">proyecto?</span>
            </h2>

            <p className={`${isDark ? 'text-gray-500' : 'text-slate-500'} text-base max-w-lg`}>
              Cuéntanos tu idea y te responderemos en menos de 24 horas.
            </p>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Info */}
            <div className="lg:col-span-4 space-y-8">
              {[
                { icon: Mail, label: "Email", value: "jenbla@gmail.com" },
                { icon: MapPin, label: "Ubicación", value: "Chivilcoy, Buenos Aires" },
                { icon: Clock, label: "Respuesta", value: "Menos de 24 horas" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <item.icon className="w-5 h-5 text-[#d4ff00]" />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase text-gray-500 tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className={`text-base font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <form 
                onSubmit={handleSubmit} 
                className={`glass-card p-8 md:p-10 rounded-[32px] space-y-8 ${
                  !isDark && 'bg-slate-50'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  
                  {/* Nombre */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                      Nombre
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Tu nombre" 
                      className={`w-full border rounded-xl px-4 py-3 outline-none focus:border-[#d4ff00] transition-colors ${
                        isDark 
                        ? 'bg-white/5 border-white/10 text-white placeholder:text-gray-600' 
                        : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-300'
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      required 
                      placeholder="correo@email.com" 
                      className={`w-full border rounded-xl px-4 py-3 outline-none focus:border-[#d4ff00] transition-colors ${
                        isDark 
                        ? 'bg-white/5 border-white/10 text-white placeholder:text-gray-600' 
                        : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-300'
                      }`}
                    />
                  </div>

                </div>

                {/* Mensaje */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                    Mensaje
                  </label>
                  <textarea 
                    rows="5" 
                    required 
                    placeholder="Contános sobre tu proyecto..." 
                    className={`w-full border rounded-xl px-4 py-3 outline-none focus:border-[#d4ff00] transition-colors resize-none ${
                      isDark 
                      ? 'bg-white/5 border-white/10 text-white placeholder:text-gray-600' 
                      : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-300'
                    }`}
                  ></textarea>
                </div>

                {/* Botón */}
                <button 
                  type="submit" 
                  className="w-full bg-[#d4ff00] text-black py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t text-center ${
        isDark ? 'border-white/5' : 'border-slate-100'
      }`}>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">
          © 2026 Jenbla • Custom Web Studio
        </p>
      </footer>
    </>
  );
};

export default Contact;