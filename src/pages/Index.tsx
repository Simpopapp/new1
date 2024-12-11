import { ProductCard } from "@/components/ProductCard";
import { PremiumSection } from "@/components/PremiumSection";
import { Wifi, Coffee, CreditCard } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const products = [
  {
    id: "v60",
    name: "Ignite V60 Vape Device [10 Pack]",
    description: "Pack com 10 unidades do dispositivo V60, perfeito para revendedores",
    price: 599.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0221.jpg?v=1691183189",
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
];

const v60Products = [
  {
    name: "Ignite V60 Vape Device",
    description: "Dispositivo V60 individual com excelente custo-benefício",
    price: 69.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0225.jpg?v=1691183075",
    time: "600 puffs"
  },
  {
    name: "Ignite V50 Vape Device",
    description: "Dispositivo V50 compacto e prático",
    price: 59.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0179_1.jpg?v=1691183359",
    time: "500 puffs"
  },
  {
    name: "Ignite V35 Vape Device",
    description: "Dispositivo V35 ideal para iniciantes",
    price: 49.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0201.jpg?v=1691183623",
    time: "350 puffs"
  },
];

const v80Products = [
  {
    name: "Ignite V80 Vape Device [5 Pack]",
    description: "Pack com 5 unidades do V80, ideal para uso prolongado",
    price: 359.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V80_Grass.jpg?v=1713918893",
    time: "800 puffs cada"
  },
  {
    name: "Ignite V80 Vape Device - Mint",
    description: "V80 com refrescante sabor de menta",
    price: 79.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V80_Couch.jpg?v=1713918859",
    time: "800 puffs"
  },
];

const v150Products = [
  {
    name: "Ignite V150 Device [5 Pack]",
    description: "Kit com 5 unidades do poderoso V150 com maior duração",
    price: 499.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/BERRY_BLAST.webp?v=1720555805",
    time: "4500 puffs total"
  },
  {
    name: "Ignite V150 Device - Fruit Mix",
    description: "V150 com delicioso mix de frutas",
    price: 119.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V150_BERRY-BLAST.png?v=1722018032",
    time: "1500 puffs"
  },
];

const v15Products = [
  {
    name: "Ignite V15 Vape Device",
    description: "Dispositivo V15 compacto e econômico",
    price: 39.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/products/ign_prodcreative0203.jpg?v=1680537677",
    time: "150 puffs"
  },
  {
    name: "Ignite V15 Vape Device [10 Pack]",
    description: "Pack econômico com 10 unidades do V15",
    price: 349.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/ign_prodcreative-v15-retouch.jpg?v=1682638135",
    time: "1500 puffs total"
  },
];

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="container mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Ignite Vape Store</h1>
        <p className="text-xl text-gray-400 mb-8">A melhor seleção de pods descartáveis Ignite</p>
      </header>

      {/* Premium Section */}
      <section className="container mx-auto mb-20">
        <PremiumSection onButtonClick={() => scrollToSection('v150-section')} />
      </section>

      {/* Products Section */}
      <section className="container mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              {...product} 
              onClick={() => scrollToSection(`${product.id}-section`)}
            />
          ))}
        </div>
      </section>

      {/* Product Category Sections */}
      <ScrollArea className="container mx-auto mb-20">
        <section id="v60-section" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Linha V60</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {v60Products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        <section id="v80-section" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Linha V80</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {v80Products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        <section id="v150-section" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Linha Premium V150</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {v150Products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        <section id="v15-section" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Linha Econômica V15</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {v15Products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>
      </ScrollArea>

      {/* Amenities */}
      <section className="container mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Diferenciais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
              <Wifi className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Entrega Expressa</h3>
            <p className="text-gray-400">Receba seu pedido no mesmo dia</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
              <Coffee className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Qualidade Premium</h3>
            <p className="text-gray-400">Produtos originais Ignite</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
              <CreditCard className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Pagamento Seguro</h3>
            <p className="text-gray-400">Diversas formas de pagamento</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Entre em Contato</h2>
          <div className="flex justify-center gap-8 mb-8">
            <a href="tel:(11) 456-7890" className="text-gold hover:text-gold-light transition-colors">
              (11) 456-7890
            </a>
            <a href="https://instagram.com" className="text-gold hover:text-gold-light transition-colors">
              @ignitestore
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Ignite Store. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
