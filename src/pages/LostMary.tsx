import { BrandLayout } from "@/components/BrandLayout";
import { ProductSection } from "@/components/ProductSection";
import { ProductCard } from "@/components/ProductCard";

const lostMaryProducts = [
  {
    id: "lm5000",
    name: "Lost Mary BM5000",
    description: "Pod descartável com 5000 puffs",
    price: 89.90,
    image: "https://mipod.com/cdn/shop/files/lostmary-mo20000_sampler-image_600x600.png?v=1716393277",
    time: "5000 puffs"
  }
];

export default function LostMary() {
  return (
    <BrandLayout
      brandName="Lost Mary"
      brandDescription="Pods descartáveis Lost Mary - Qualidade e sabor incomparáveis"
    >
      <ProductSection title="Linha BM5000">
        {lostMaryProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductSection>
    </BrandLayout>
  );
}