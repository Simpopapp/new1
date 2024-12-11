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
  }
];

export const V150Line = () => (
  <ProductSection title="Linha V150" className="mb-20">
    {v150Products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))}
  </ProductSection>
);