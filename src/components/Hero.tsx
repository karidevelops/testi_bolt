import { Button } from "@/components/ui/button";
import heroImage from "@/assets/og-image-new.jpg";
const Hero = () => {
  return <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
      </div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-scale-in tracking-tight">
            Growing the Future – Together
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto leading-relaxed font-light">Kasvamme tulevaisuuteen – yhdessä.</p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed font-light">Yhdessä rakennamme kasvua, joka kestää. Concept7 tukee yrityksiä ja organisaatioita kehittämään tulevaisuuden ratkaisuja – tänään.</p>
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