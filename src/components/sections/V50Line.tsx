import { ProductCard } from "@/components/ProductCard";
import { ProductSection } from "@/components/ProductSection";

const v50Products = [
  {
    id: "v50",
    name: "Ignite V50 Vape Device",
    description: "Dispositivo V50 ideal para uso moderado",
    price: 59.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0179_1.jpg?v=1691183359",
    time: "500 puffs"
  },
  {
    id: "v50-pack",
    name: "Ignite V50 Vape Device [10 Pack]",
    description: "Pack com 10 unidades do V50",
    price: 549.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/v50_SinglePack_LineupShot.jpg?v=1691693458",
    time: "5000 puffs total"
  }
];

export const V50Line = () => (
  <ProductSection title="Linha V50" className="mb-20">
    {v50Products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))}
  </ProductSection>
);