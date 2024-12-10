import { ProductCard } from "@/components/ProductCard";
import { PremiumSection } from "@/components/PremiumSection";
import { Wifi, Coffee, CreditCard } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const products = [
  {
    name: "Ignite V60 Vape Device [10 Pack]",
    description: "Pack com 10 unidades do dispositivo V60, perfeito para revendedores",
    price: 599.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0221.jpg?v=1691183189",
    time: "600 puffs",
    category: "v60"
  },
  {
    name: "Ignite V80 Vape Device",
    description: "Dispositivo V80 individual com maior capacidade e duração",
    price: 79.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V80_Couch.jpg?v=1713918859",
    time: "800 puffs",
    category: "v80"
  },
  {
    name: "Ignite V80 Vape Device - Tobacco",
    description: "V80 com sabor autêntico de tabaco para uma experiência tradicional",
    price: 79.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/Tobacco_2.webp?v=1718828976",
    time: "800 puffs",
    category: "v80"
  },
];

const v80Products = [
  {
    name: "Ignite V80 Vape Device [10 Pack]",
    description: "Pack econômico com 10 unidades do V80, ideal para revendedores",
    price: 699.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V80_Grass.jpg?v=1713918893",
    time: "8000 puffs total",
    category: "v80"
  },
  {
    name: "Ignite V80 Vape Device - Tobacco [10 Pack]",
    description: "Pack com 10 unidades do V80 sabor tabaco",
    price: 699.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/TOBACCO.webp?v=1720032194",
    time: "8000 puffs total",
    category: "v80"
  }
];

const v150Products = [
  {
    name: "Ignite V150 Device [5 Pack]",
    description: "Kit com 5 unidades do poderoso V150 com maior duração",
    price: 499.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/BERRY_BLAST.webp?v=1720555805",
    time: "4500 puffs total",
    category: "v150"
  },
  {
    name: "Ignite V150 Device - Tobacco [5 Pack]",
    description: "Kit com 5 unidades do V150 sabor tabaco",
    price: 499.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/TOBACCO_a593b9b2-8ad7-4df8-968a-0dd318f9a504.webp?v=1720555752",
    time: "4500 puffs total",
    category: "v150"
  },
  {
    name: "Ignite V150 Vape Device - Tobacco",
    description: "V150 individual sabor tabaco com maior duração",
    price: 119.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V150_TOBACCO.webp?v=1718895995",
    time: "1500 puffs",
    category: "v150"
  }
];

const Index = () => {
  const [isV80Open, setIsV80Open] = useState(false);
  const [isV150Open, setIsV150Open] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="container mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Ignite Vape Store</h1>
        <p className="text-xl text-gray-400 mb-8">A melhor seleção de pods descartáveis Ignite</p>
      </header>

      {/* Premium Section */}
      <section className="container mx-auto mb-20">
        <PremiumSection />
      </section>

      {/* Products Section */}
      <section className="container mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      {/* V80 Expanded Section */}
      <section className="container mx-auto mb-20">
        <Collapsible open={isV80Open} onOpenChange={setIsV80Open}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full mb-4 bg-secondary hover:bg-gold hover:text-black transition-all">
              {isV80Open ? "Fechar Linha V80" : "Ver Mais Produtos V80"}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {v80Products.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </section>

      {/* V150 Expanded Section */}
      <section className="container mx-auto mb-20">
        <Collapsible open={isV150Open} onOpenChange={setIsV150Open}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full mb-4 bg-secondary hover:bg-gold hover:text-black transition-all">
              {isV150Open ? "Fechar Linha V150" : "Ver Mais Produtos V150"}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {v150Products.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </section>

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