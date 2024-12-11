import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <div className="relative w-full bg-gradient-to-b from-secondary/80 to-secondary/40 backdrop-blur-md sticky top-0 z-50 py-12 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-50" />
      
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-[1200px] mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {brandMenuItems.map((brand, index) => (
              <CarouselItem key={brand.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => navigate(brand.route)}
                  className={cn(
                    "group flex flex-col items-center gap-6 rounded-lg overflow-hidden",
                    "hover:bg-secondary/60 transition-all duration-300 ease-out",
                    "focus:outline-none focus:ring-2 focus:ring-primary/50",
                    "relative w-full"
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
                  
                  <span className="text-2xl font-medium bg-gradient-gold bg-clip-text text-transparent group-hover:text-foreground transition-colors duration-300 p-3">
                    {brand.name}
                  </span>
                </motion.button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-secondary/80 hover:bg-secondary border-gold/20" />
          <CarouselNext className="hidden md:flex -right-12 bg-secondary/80 hover:bg-secondary border-gold/20" />
        </Carousel>
      </div>
    </div>
  );
}