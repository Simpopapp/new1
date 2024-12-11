import { ProductCard } from "@/components/ProductCard";

const singleUnits = [
  {
    id: "v60",
    name: "Ignite V60 Vape Device",
    description: "Dispositivo V60 individual com excelente custo-benefício",
    price: 69.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0225.jpg?v=1691183075",
    time: "600 puffs"
  },
  {
    id: "v80",
    name: "Ignite V80 Vape Device",
    description: "Dispositivo V80 individual com maior capacidade e duração",
    price: 79.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V80_Couch.jpg?v=1713918859",
    time: "800 puffs"
  },
  {
    id: "v80-tobacco",
    name: "Ignite V80 Vape Device - Tobacco",
    description: "V80 com sabor autêntico de tabaco para uma experiência tradicional",
    price: 79.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/Tobacco_2.webp?v=1718828976",
    time: "800 puffs"
  },
  {
    id: "v150",
    name: "Ignite V150 Vape Device",
    description: "Dispositivo V150 com maior autonomia",
    price: 119.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V150_BERRY-BLAST.png?v=1722018032",
    time: "1500 puffs"
  },
  {
    id: "v150-tobacco",
    name: "Ignite V150 Vape Device - Tobacco",
    description: "V150 com sabor premium de tabaco",
    price: 119.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V150_TOBACCO.webp?v=1718895995",
    time: "1500 puffs"
  }
];

export const SingleUnits = () => (
  <section id="single-units" className="mb-20">
    <h2 className="text-3xl font-bold mb-8">Unidades Individuais</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {singleUnits.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </section>
);