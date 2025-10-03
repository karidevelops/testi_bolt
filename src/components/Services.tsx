import ServiceCard from "./ServiceCard";

const Services = () => {
  const handleContactClick = () => {
    document.getElementById('yhteys')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="palvelut" className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center uppercase tracking-tight">
          Palvelupaketit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Nopea sparraus – 15 min"
            description="Pikakartoitus tavoitteista, tilanteesta ja seuraavasta askeleesta. Toteutus Teamsissa tai puhelimitse."
            price="0 € (alv 0%)"
            buttonText="Varaa aika"
            onButtonClick={handleContactClick}
            detailsType="flip"
            details={[
              { label: "Kesto", content: "15 minuuttia" },
              { label: "Toteutus", content: "Microsoft Teams tai puhelimitse" },
              { label: "Kenelle sopii", content: "Nopea neuvonpyyntö, ensitapaaminen" },
              { label: "Hinta", content: "Maksuton, ei sitoumuksia" }
            ]}
          />
          <ServiceCard
            title="Starttipaketti – Idean sparraus tai arjen haasteet"
            description="Kasvuhaluisille ja toimintaa tehostaville yrityksille ja startupeille. Sisältää idean sparrauksen yrityksen olemassaolevasta haasteista ja 1-2 konkreettista toimenpidesuositusta."
            price="1 200 € / kertapaketti (alv 0%)"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
            detailsType="flip"
            details={[
              { label: "Alkukartoitus", content: "Perusteellinen keskustelu yrityksen nykytilanteesta, haasteista ja tavoitteista 2-3 tapaamisessa." },
              { label: "Analysointi", content: "Tunnistetaan keskeisimmät pullonkaulat ja kehityskohteet, joihin kannattaa keskittyä ensimmäisenä." },
              { label: "Toimenpidesuositukset", content: "Konkreettiset 1-2 suositusta, jotka voit ottaa heti käyttöön liiketoiminnan kehittämiseksi." },
              { label: "Kirjallinen raportti", content: "Saat yhteenvedon keskusteluista ja toimenpidesuosituksista toteutuksen tueksi." }
            ]}
          />
          <ServiceCard
            title="Yrittäjän ja johdon tuki & sparraus"
            description="Säännöllinen sparraus päätösten tueksi. Sisältää fokus-keskustelut ja tiiviit toimenpidesuositukset. Tehtävät määritellään tapauskohtaisesti yrityksen tarpeen mukaan."
            price="2 000 € / kk (alv 0%)"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
            isPopular={true}
            detailsType="flip"
            details={[
              { label: "Aikajänne", content: "Kuukausisopimus, jatkuva yhteistyö" },
              { label: "Tapaamiset", content: "2-4 sparraustapaamista kuukaudessa, joustavasti sovittavissa" },
              { label: "Fokus", content: "Strategiset päätökset, kasvun tukeminen, operatiivisten haasteiden ratkaisu" },
              { label: "Kenelle sopii", content: "Yrittäjät ja johto, jotka kaipaavat jatkuvaa tukea päätöksentekoon" },
              { label: "Lisäedut", content: "Priorisoitu asiakkuus, nopea reagointi akuutteihin tarpeisiin" },
              { label: "Hyödyt", content: "Selkeämpi suunta, nopeammat päätökset, vähemmän yksinäisyyttä johdossa" }
            ]}
          />
          <ServiceCard
            title="Innovaatiopaketti – AI ja digitalisaatio"
            description="Nopealla prototypoinnilla arvioimme liiketoimintamallisi mahdollisuuksia. Digitaalisten palveluiden ideointi, AI-ratkaisujen kartoitus, työpaja ja tulosten analyysi."
            price="4 900 € (alv 0%)"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
            detailsType="flip"
            details={[
              { label: "Kesto", content: "4-6 viikkoa kokonaisprojekti" },
              { label: "Prosessi", content: "Aloituspalaveri → Työpaja → Prototypointi → Tulosten esittely ja analyysi" },
              { label: "Teknologiat", content: "AI-ratkaisujen kartoitus (ChatGPT, koneoppiminen, automaatio), digitaalisten palveluiden suunnittelu" },
              { label: "Lopputulos", content: "Konkreettinen prototyyppi tai demo, tekninen toteutussuunnitelma, liiketoimintapotentiaalin arvio" },
              { label: "Kenelle sopii", content: "Yritykset, jotka haluavat hyödyntää uutta teknologiaa kilpailuedun saavuttamiseksi" }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
