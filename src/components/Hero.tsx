import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-700"></div>
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
      </div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-scale-in tracking-tight">
            Kasvu, kannattavuus<br />
            ja arjen ratkaisut.
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed font-light">Sparraan niin pieniä startupeja kuin kasvuvaiheessa olevia pk-yrityksiä. Kirkastetaan tarjooma, tuotteistetaan, optimoidaan kustannukset ja rakennetaan hinnoittelu, joka kestää kasvun. Olen tukenasi myös yrityksen arkisissa haasteissa.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent-dark text-accent-foreground shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 font-semibold" onClick={() => document.getElementById('palvelut')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Tutustu palveluihin
            </Button>
            <Button size="lg" className="text-lg px-8 py-6 bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 font-semibold" onClick={() => document.getElementById('yhteys')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Ota yhteyttä
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;