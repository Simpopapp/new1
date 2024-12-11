import { ProductCard } from "@/components/ProductCard";

const allPacks = [
  {
    id: "v15-pack",
    name: "Ignite V15 Vape Device [10 Pack]",
    description: "Pack econômico com 10 unidades do V15",
    price: 349.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/ign_prodcreative-v15-retouch.jpg?v=1682638135",
    time: "1500 puffs total"
  },
  {
    id: "v35-pack",
    name: "Ignite V35 Vape Device [10 Pack]",
    description: "Pack com 10 unidades do V35",
    price: 449.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0195_1.jpg?v=1691183683",
    time: "3500 puffs total"
  },
  {
    id: "v50-pack",
    name: "Ignite V50 Vape Device [10 Pack]",
    description: "Pack com 10 unidades do V50",
    price: 549.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/v50_SinglePack_LineupShot.jpg?v=1691693458",
    time: "5000 puffs total"
  },
  {
    id: "v60-pack",
    name: "Ignite V60 Vape Device [10 Pack]",
    description: "Pack com 10 unidades do dispositivo V60",
    price: 599.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0221.jpg?v=1691183189",
    time: "6000 puffs total"
  },
  {
    id: "v80-pack",
    name: "Ignite V80 Vape Device [10 Pack]",
    description: "Pack com 10 unidades do V80",
    price: 699.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V80_Grass.jpg?v=1713918893",
    time: "8000 puffs total"
  },
  {
    id: "v80-tobacco-pack",
    name: "Ignite V80 Vape Device - Tobacco [10 Pack]",
    description: "Pack com 10 unidades do V80 sabor tabaco",
    price: 699.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/TOBACCO.webp?v=1720032194",
    time: "8000 puffs total"
  },
  {
    id: "v150-pack",
    name: "Ignite V150 Device [5 Pack]",
    description: "Kit com 5 unidades do poderoso V150",
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

export const AllPacks = () => (
  <section id="all-packs" className="mb-20">
    <h2 className="text-3xl font-bold mb-8">Todos os Packs</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allPacks.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </section>
);