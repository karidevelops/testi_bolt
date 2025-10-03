import profileImage from "@/assets/kari-vatka.jpg";
import referenssitImage from "@/assets/referenssit.png";

const About = () => {
  return (
    <section id="minusta" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center uppercase tracking-tight">
          Minusta
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src={profileImage} 
              alt="Profiilikuva Kari Vatka" 
              className="rounded-lg shadow-2xl w-full max-w-sm object-cover"
            />
          </div>
          
          <div className="md:w-2/3 space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              Olen <strong>Kari Vatka</strong>, yrittäjä, yrityskonsultti ja kehittäjä, jolla on laaja kokemus yrityksen arjen pyörittämisestä, tuotekehityksestä, hinnoittelusta, kustannusten optimoinnista, rektytoinnista, myynnistä ja markkinoinnista sekä prosessien tehostamisesta. Hyödynnän työssäni tekoälyä ja digitaalisia työkaluja tuodakseni lisäarvoa yrityksille.
            </p>
            <p>
              Sparraan niin pieniä startupeja kuin kasvuvaiheessa olevia pk-yrityksiä kirkastamaan tarjooman ja rakentamaan kannattavan liiketoiminnan. En tarjoa vain strategista näkemystä, vaan olen myös käytännön tukena yrityksen arjen haasteissa, jotta päätöksiä ei tarvitse tehdä yksin.
            </p>
          </div>
        </div>

        <div id="referenssit" className="mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center uppercase tracking-tight">
            Referenssit
          </h3>
          <img 
            src={referenssitImage} 
            alt="Referenssit" 
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
