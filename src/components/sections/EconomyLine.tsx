import { ProductCard } from "@/components/ProductCard";

const economyProducts = [
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
  },
  {
    id: "v35",
    name: "Ignite V35 Vape Device",
    description: "Dispositivo V35 ideal para iniciantes",
    price: 49.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0201.jpg?v=1691183623",
    time: "350 puffs"
  },
  {
    id: "v35-pack",
    name: "Ignite V35 Vape Device [10 Pack]",
    description: "Pack com 10 unidades do V35",
    price: 449.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0195_1.jpg?v=1691183683",
    time: "3500 puffs total"
  }
];

export const EconomyLine = () => (
  <section id="economy-line" className="mb-20">
    <h2 className="text-3xl font-bold mb-8">Linha Econômica</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {economyProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </section>
);