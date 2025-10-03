import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="yhteys" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-tight">
          Yhteystiedot
        </h2>
        <div className="w-24 h-1 bg-accent mb-12"></div>
        <div className="space-y-8">
          <a 
            href="mailto:kari@concept7.fi"
            className="flex items-center gap-6 text-xl text-foreground hover:text-accent transition-all duration-300 hover:translate-x-2 group"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
              <Mail className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="font-medium">kari@concept7.fi</span>
          </a>
          <a 
            href="tel:+358456367653"
            className="flex items-center gap-6 text-xl text-foreground hover:text-accent transition-all duration-300 hover:translate-x-2 group"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
              <Phone className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="font-medium">045 636 7653</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/kari-vatka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 text-xl text-foreground hover:text-accent transition-all duration-300 hover:translate-x-2 group"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
              <Linkedin className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="font-medium">linkedin.com/in/kari-vatka</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
