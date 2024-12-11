import { ProductCard } from "@/components/ProductCard";
import { ChevronDown } from "lucide-react";

const v150Products = [
  {
    id: "v150",
    name: "Ignite V150 Vape Device",
    description: "Dispositivo V150 com maior autonomia",
    price: 119.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V150_BERRY-BLAST.png?v=1722018032",
    time: "1500 puffs"
  },
  {
    id: "v150-tobacco",
    name: "Ignite V150 Vape Device - Tobacco",
    description: "V150 com sabor premium de tabaco",
    price: 119.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V150_TOBACCO.webp?v=1718895995",
    time: "1500 puffs"
  }
];

export const V150Line = () => (
  <section id="v150-section" className="mb-20">
    <div className="flex items-center gap-2 mb-8">
      <h2 className="text-3xl font-bold">Linha V150</h2>
      <ChevronDown className="text-gold h-6 w-6" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {v150Products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </section>
);