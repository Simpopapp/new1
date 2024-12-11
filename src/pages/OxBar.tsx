import { BrandLayout } from "@/components/BrandLayout";
import { ProductSection } from "@/components/ProductSection";
import { ProductCard } from "@/components/ProductCard";

const oxBarProducts = [
  {
    id: "ox5000",
    name: "Ox Bar 5000",
    description: "Pod descartável com 5000 puffs",
    price: 89.90,
    image: "https://www.oxbar.com/cdn/shop/files/20240715-172125.png?v=1721035393",
    time: "5000 puffs"
  }
];

export default function OxBar() {
  return (
    <BrandLayout
      brandName="Ox Bar"
      brandDescription="Pods descartáveis Ox Bar - Qualidade e sabor incomparáveis"
    >
      <ProductSection title="Linha 5000">
        {oxBarProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductSection>
    </BrandLayout>
  );
}