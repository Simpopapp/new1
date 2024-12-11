import { ProductCard } from "@/components/ProductCard";
import { ProductSection } from "@/components/ProductSection";

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
  },
  {
    id: "v150-pack",
    name: "Ignite V150 Device [5 Pack]",
    description: "Kit com 5 unidades do poderoso V150 com maior duração",
    price: 499.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/BERRY_BLAST.webp?v=1720555805",
    time: "7500 puffs total"
  },
  {
    id: "v150-tobacco-pack",
    name: "Ignite V150 Device - Tobacco [5 Pack]",
    description: "Kit com 5 unidades do V150 sabor tabaco",
    price: 499.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/TOBACCO_a593b9b2-8ad7-4df8-968a-0dd318f9a504.webp?v=1720555752",
    time: "7500 puffs total"
  }
];

export const V150Line = () => (
  <ProductSection title="Linha V150" className="mb-20">
    {v150Products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))}
  </ProductSection>
);