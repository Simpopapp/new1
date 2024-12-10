import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";

export function PremiumSection() {
  return (
    <div className="relative overflow-hidden bg-secondary rounded-lg p-8 mb-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-gold flex items-center gap-2">
            <Crown className="h-8 w-8" /> Premium Collection
          </h2>
          <p className="text-gray-400 mb-6">
            Experimente nossa linha exclusiva de pods premium, com sabores únicos e duração prolongada.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>Maior durabilidade</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>Sabores exclusivos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>Qualidade superior</span>
            </div>
          </div>
          <Button className="mt-8 bg-gradient-gold text-black hover:bg-gold hover:scale-105 transition-all duration-300">
            Ver Coleção Premium
          </Button>
        </div>
        <div className="flex-1">
          <img
            src="/public/lovable-uploads/18ed7b05-cb14-4b1f-a3d4-5625f71fea74.png"
            alt="Premium Collection"
            className="rounded-lg w-full h-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}