import { ProductCard } from "@/components/ProductCard";

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
  <section id="v15-section" className="mb-20">
    <h2 className="text-3xl font-bold mb-8">Linha V15</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {v15Products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </section>
);