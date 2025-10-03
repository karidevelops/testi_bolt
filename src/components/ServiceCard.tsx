import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Info, ChevronDown } from "lucide-react";
import { useState } from "react";

interface ServiceDetail {
  label: string;
  content: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  buttonText: string;
  onButtonClick: () => void;
  isPopular?: boolean;
  detailsType?: "accordion" | "popover" | "modal" | "expandable" | "flip";
  details?: ServiceDetail[];
}

const ServiceCard = ({ title, description, price, buttonText, onButtonClick, isPopular, detailsType, details }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const renderDetails = () => {
    if (!details || !detailsType) return null;

    switch (detailsType) {
      case "accordion":
        return (
          <Accordion type="single" collapsible className="mb-4">
            <AccordionItem value="details" className="border-none">
              <AccordionTrigger className="text-sm text-accent hover:no-underline py-2">
                Lisätiedot
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {details.map((detail, idx) => (
                    <li key={idx}>
                      <strong className="text-foreground">{detail.label}:</strong> {detail.content}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );

      case "popover":
        return null; // Popover is now integrated into the icon circle

      case "modal":
        return (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="mb-4 w-full">
                Lue lisää <Info className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">{title}</DialogTitle>
                <DialogDescription className="text-base pt-2">{description}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                {details.map((detail, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-foreground mb-1">{detail.label}</h4>
                    <p className="text-muted-foreground">{detail.content}</p>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        );

      case "expandable":
        return (
          <div className="mb-4">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-between text-accent hover:text-accent"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Piilota lisätiedot" : "Näytä lisätiedot"}
              <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            </Button>
            {isExpanded && (
              <div className="mt-3 space-y-3 text-sm animate-in slide-in-from-top-2">
                {details.map((detail, idx) => (
                  <div key={idx}>
                    <strong className="text-foreground">{detail.label}</strong>
                    <p className="text-muted-foreground mt-1">{detail.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case "flip":
        return null; // Flip is handled at card level

      default:
        return null;
    }
  };

  if (detailsType === "flip") {
    return (
      <div className="relative h-[500px]" style={{ perspective: "1000px" }}>
        <div
          className={`relative w-full h-full transition-transform duration-700 cursor-pointer`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front side */}
          <Card className="absolute inset-0 p-8 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300 border border-border bg-card group overflow-visible" style={{ backfaceVisibility: "hidden" }}>
            {isPopular && (
              <div className="absolute top-4 -right-10 bg-accent text-accent-foreground px-14 py-2 rotate-45 text-sm font-bold uppercase tracking-wide shadow-lg text-center animate-pulse">
                Suosituin
              </div>
            )}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:animate-pulse-scale transition-colors duration-300 flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-accent group-hover:bg-white transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide break-words">
                {title}
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 flex-grow leading-relaxed text-base">
              {description}
            </p>
            <div className="mt-auto">
              <p className="text-xl font-bold text-foreground mb-6">
                {price}
              </p>
              <div className="flex items-center justify-center text-sm text-accent font-semibold">
                <Info className="h-4 w-4 mr-2" />
                Klikkaa nähdäksesi lisätiedot
              </div>
            </div>
          </Card>

          {/* Back side */}
          <Card className="absolute inset-0 p-6 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300 border border-border bg-accent text-accent-foreground overflow-hidden" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-white"></div>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide">
                Paketin sisältö
              </h3>
            </div>
            <div className="space-y-3 flex-grow">
              {details?.map((detail, idx) => (
                <div key={idx}>
                  <div className="font-bold text-sm mb-0.5">{detail.label}</div>
                  <div className="text-xs opacity-90 leading-relaxed">{detail.content}</div>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-4">
              <p className="text-lg font-bold mb-4">
                {price}
              </p>
              <Button
                className="w-full bg-white hover:bg-white/90 text-accent font-semibold shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide rounded-full py-2 text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onButtonClick();
                }}
              >
                {buttonText}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <Card className="p-8 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-border bg-card group relative overflow-hidden">
      {isPopular && (
        <div className="absolute top-4 -right-10 bg-accent text-accent-foreground px-14 py-2 rotate-45 text-sm font-bold uppercase tracking-wide shadow-lg text-center animate-pulse">
          Suosituin
        </div>
      )}
      {detailsType === "popover" ? (
        <Popover>
          <PopoverTrigger asChild>
            <button className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 hover:bg-accent transition-colors duration-300 cursor-pointer group/icon relative hover:animate-pulse-scale">
              <div className="w-8 h-8 rounded-full bg-accent group-hover/icon:bg-white transition-colors duration-300 group-hover/icon:opacity-0"></div>
              <Info className="h-6 w-6 text-accent group-hover/icon:text-white transition-colors duration-300 absolute opacity-0 group-hover/icon:opacity-100" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm mb-3">Paketin sisältö</h4>
              {details?.map((detail, idx) => (
                <div key={idx} className="text-sm">
                  <strong className="text-foreground">{detail.label}:</strong>
                  <p className="text-muted-foreground mt-1">{detail.content}</p>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:animate-pulse-scale transition-colors duration-300">
          <div className="w-8 h-8 rounded-full bg-accent group-hover:bg-white transition-colors duration-300"></div>
        </div>
      )}
      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300 uppercase tracking-wide break-words">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6 flex-grow leading-relaxed text-base">
        {description}
      </p>
      {detailsType && detailsType !== "popover" && renderDetails()}
      <div className="mt-auto">
        <p className="text-xl font-bold text-foreground mb-6">
          {price}
        </p>
        <Button 
          className="w-full bg-accent hover:bg-accent-dark text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
