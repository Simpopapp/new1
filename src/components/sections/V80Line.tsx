import { ProductCard } from "@/components/ProductCard";
import { ProductSection } from "@/components/ProductSection";

const v80Products = [
  {
    id: "v80",
    name: "Ignite V80 Vape Device",
    description: "Dispositivo V80 individual com maior capacidade",
    price: 79.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V80_Couch.jpg?v=1713918859",
    time: "800 puffs"
  },
  {
    id: "v80-tobacco",
    name: "Ignite V80 Vape Device - Tobacco",
    description: "V80 com sabor autêntico de tabaco",
    price: 79.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/Tobacco_2.webp?v=1718828976",
    time: "800 puffs"
  }
];

export const V80Line = () => (
  <ProductSection title="V80" className="mb-20">
    {v80Products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))}
  </ProductSection>
);