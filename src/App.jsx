import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030712] text-white">

      {/* FONDO CON GRADIENTES */}
      <div className="absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_10%_10%,rgba(212,255,0,0.15),transparent_30%),
             radial-gradient(circle_at_90%_20%,rgba(37,99,235,0.15),transparent_30%),
             radial-gradient(circle_at_50%_90%,rgba(255,59,48,0.1),transparent_40%)]">
      </div>

      {/* ORBS (luces) */}
      <div className="absolute -left-20 top-0 w-[250px] h-[250px] opacity-20 blur-[100px] md:-left-40 md:w-[500px] md:h-[500px] md:opacity-30 md:blur-[160px] bg-[#d4ff00] rounded-full"></div>

      <div className="absolute right-0 top-40 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full"></div>

      <HomePage />
    </div>
  );
}

export default App;