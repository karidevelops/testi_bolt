import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#palvelut", label: "Palvelut" },
    { href: "#minusta", label: "Minusta" },
    { href: "#referenssit", label: "Referenssit" },
    { href: "#yhteys", label: "Yhteystiedot" },
  ];

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-6 max-w-7xl flex h-20 items-center justify-between">
        <a 
          href="#top" 
          className="flex items-center gap-2 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="text-2xl font-bold text-foreground">CONCEPT7</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-foreground hover:text-accent transition-colors duration-300 uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden p-2" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-lg font-semibold text-foreground hover:text-accent transition-colors duration-300 uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
