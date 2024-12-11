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
    image: "https://cdn.shopify.com/s/files/1/0262/5804/7069/files/elf-bar-logo_256x256.png?v=1701697284",
    route: "/elfbar"
  },
  {
    id: "lostmary",
    name: "Lost Mary",
    image: "https://cdn.shopify.com/s/files/1/0262/5804/7069/files/lost-mary-logo_256x256.png?v=1701697284",
    route: "/lostmary"
  },
  {
    id: "oxbar",
    name: "Ox Bar",
    image: "https://cdn.shopify.com/s/files/1/0262/5804/7069/files/ox-bar-logo_256x256.png?v=1701697284",
    route: "/oxbar"
  }
];

export function BrandsMenu() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-secondary/50 backdrop-blur-sm sticky top-0 z-50 py-4">
      <ScrollArea className="w-full">
        <div className="flex items-center gap-4 px-4 min-w-max mx-auto max-w-screen-xl">
          {brandMenuItems.map((brand) => (
            <button
              key={brand.id}
              onClick={() => navigate(brand.route)}
              className={cn(
                "flex flex-col items-center gap-2 p-2 rounded-lg",
                "hover:bg-secondary/80 transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-primary/50"
              )}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden bg-background/10 p-2">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-medium text-foreground/80">{brand.name}</span>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}