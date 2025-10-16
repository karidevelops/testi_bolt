import BadgeVariants from "@/components/ServiceCardVariants";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BadgePreview = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Takaisin etusivulle
        </Button>
        <BadgeVariants />
      </div>
    </div>
  );
};

export default BadgePreview;
