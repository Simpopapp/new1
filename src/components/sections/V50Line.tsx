import { ProductCard } from "@/components/ProductCard";

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
  <section id="v50-section" className="mb-20">
    <h2 className="text-3xl font-bold mb-8">Linha V50</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {v50Products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </section>
);