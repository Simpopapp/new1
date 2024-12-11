import { useNavigate } from "react-router-dom";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
    <div className="relative w-full bg-gradient-to-b from-secondary/80 to-secondary/40 backdrop-blur-md sticky top-0 z-50 py-16 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-50" />
      
      <ScrollArea className="w-full">
        <div className="flex items-center gap-16 px-16 min-w-max mx-auto max-w-screen-xl relative">
          {brandMenuItems.map((brand, index) => (
            <motion.button
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => navigate(brand.route)}
              className={cn(
                "group flex flex-col items-center gap-8 rounded-lg overflow-hidden",
                "hover:bg-secondary/60 transition-all duration-300 ease-out",
                "focus:outline-none focus:ring-2 focus:ring-primary/50",
                "relative w-[400px]"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div 
                className="w-full aspect-[3/4] relative bg-gradient-to-br from-background/20 to-background/5"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              
              <span className="text-3xl font-medium bg-gradient-gold bg-clip-text text-transparent group-hover:text-foreground transition-colors duration-300 p-4">
                {brand.name}
              </span>
            </motion.button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}