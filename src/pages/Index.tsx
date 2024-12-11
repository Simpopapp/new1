import { PremiumSection } from "@/components/PremiumSection";
import { SingleUnits } from "@/components/sections/SingleUnits";
import { PackUnits } from "@/components/sections/PackUnits";
import { EconomyLine } from "@/components/sections/EconomyLine";
import { Wifi, Coffee, CreditCard } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProductCard } from "@/components/ProductCard";

const featuredProducts = [
  {
    id: "v150",
    name: "Ignite V150 Vape Device",
    description: "Dispositivo V150 com maior autonomia",
    price: 119.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V150_BERRY-BLAST.png?v=1722018032",
    time: "1500 puffs",
    sectionId: "v150-section"
  },
  {
    id: "v80",
    name: "Ignite V80 Vape Device",
    description: "Dispositivo V80 individual com maior capacidade",
    price: 79.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V80_Couch.jpg?v=1713918859",
    time: "800 puffs",
    sectionId: "v80-section"
  },
  {
    id: "v15",
    name: "Ignite V15 Vape Device",
    description: "Dispositivo V15 compacto e econômico",
    price: 39.90,
    image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/products/ign_prodcreative0203.jpg?v=1680537677",
    time: "150 puffs",
    sectionId: "economy-section"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="container mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Ignite Vape Store</h1>
        <p className="text-xl text-gray-400 mb-8">A melhor seleção de pods descartáveis Ignite</p>
      </header>

      {/* Featured Products Section */}
      <section className="container mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onClick={() => {
                document.getElementById(product.sectionId)?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </section>

      {/* Premium Section */}
      <section className="container mx-auto mb-20">
        <PremiumSection onButtonClick={() => {
          document.getElementById('v150-section')?.scrollIntoView({ behavior: 'smooth' });
        }} />
      </section>

      {/* Anchored Product Sections */}
      <ScrollArea className="container mx-auto">
        <section id="v150-section" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Linha V150</h2>
          <SingleUnits />
        </section>

        <section id="v80-section" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Linha V80</h2>
          <PackUnits />
        </section>

        <section id="economy-section" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Linha Econômica</h2>
          <EconomyLine />
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