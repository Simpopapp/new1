import { ProductCard } from "@/components/ProductCard";

const v60Products = [
  {
    id: "v60",
    name: "Ignite V60 Vape Device",
    description: "Dispositivo V60 individual com excelente custo-benefício",
    price: 69.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0225.jpg?v=1691183075",
    time: "600 puffs"
  },
  {
    id: "v60-pack",
    name: "Ignite V60 Vape Device [10 Pack]",
    description: "Pack com 10 unidades do dispositivo V60, perfeito para revendedores",
    price: 599.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0221.jpg?v=1691183189",
    time: "6000 puffs total"
  }
];

export const V60Line = () => (
  <section id="v60-section" className="mb-20">
    <h2 className="text-3xl font-bold mb-8">Linha V60</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {v60Products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </section>
);