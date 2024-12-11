import { ProductCard } from "@/components/ProductCard";
import { ProductSection } from "@/components/ProductSection";

const v15Products = [
  {
    id: "v15",
    name: "Ignite V15 Vape Device",
    description: "Dispositivo V15 compacto e econômico",
    price: 39.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/products/ign_prodcreative0203.jpg?v=1680537677",
    time: "150 puffs"
  },
  {
    id: "v15-pack",
    name: "Ignite V15 Vape Device [10 Pack]",
    description: "Pack econômico com 10 unidades do V15",
    price: 349.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/ign_prodcreative-v15-retouch.jpg?v=1682638135",
    time: "1500 puffs total"
  }
];

export const V15Line = () => (
  <ProductSection title="Linha V15" className="mb-20">
    {v15Products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))}
  </ProductSection>
);