import { BrandLayout } from "@/components/BrandLayout";
import { ProductSection } from "@/components/ProductSection";
import { ProductCard } from "@/components/ProductCard";

const elfBarProducts = [
  {
    id: "bc5000",
    name: "Elf Bar BC5000",
    description: "Pod descartável com 5000 puffs",
    price: 89.90,
    image: "https://cdn.shopify.com/s/files/1/0262/5804/7069/files/elf-bar-bc5000_256x256.png?v=1701697284",
    time: "5000 puffs"
  },
  {
    id: "bc5000-ultra",
    name: "Elf Bar BC5000 Ultra",
    description: "Pod descartável premium com 5000 puffs",
    price: 99.90,
    image: "https://cdn.shopify.com/s/files/1/0262/5804/7069/files/elf-bar-bc5000-ultra_256x256.png?v=1701697284",
    time: "5000 puffs"
  }
];

export default function ElfBar() {
  return (
    <BrandLayout
      brandName="Elf Bar"
      brandDescription="Pods descartáveis Elf Bar - Qualidade e sabor incomparáveis"
    >
      <ProductSection title="Linha BC5000">
        {elfBarProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductSection>
    </BrandLayout>
  );
}