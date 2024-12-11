import { useNavigate } from "react-router-dom";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

interface BrandMenuItem {
  id: string;
  name: string;
  image: string;
  route: string;
}

const brandMenuItems: BrandMenuItem[] = [
  {
    id: "elfbar",
    name: "Elf Bar",
    image: "https://elfbarbrasil.com/elfbar/bc10000-black-gold/",
    route: "/elfbar"
  },
  {
    id: "lostmary",
    name: "Lost Mary",
    image: "https://mipod.com/cdn/shop/files/lostmary-mo20000_sampler-image_600x600.png?v=1716393277",
    route: "/lostmary"
  },
  {
    id: "oxbar",
    name: "Ox Bar",
    image: "https://www.oxbar.com/cdn/shop/files/20240715-172125.png?v=1721035393",
    route: "/oxbar"
  }
];

export function BrandsMenu() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-secondary/50 backdrop-blur-sm sticky top-0 z-50 py-8">
      <ScrollArea className="w-full">
        <div className="flex items-center gap-8 px-8 min-w-max mx-auto max-w-screen-xl">
          {brandMenuItems.map((brand) => (
            <button
              key={brand.id}
              onClick={() => navigate(brand.route)}
              className={cn(
                "flex flex-col items-center gap-4 p-4 rounded-lg",
                "hover:bg-secondary/80 transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-primary/50"
              )}
            >
              <div className="w-48 h-48 rounded-full overflow-hidden bg-background/10 p-4">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-medium text-foreground/80">{brand.name}</span>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}