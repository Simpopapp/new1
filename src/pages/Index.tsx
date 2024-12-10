import { ProductCard } from "@/components/ProductCard";
import { PremiumSection } from "@/components/PremiumSection";
import { Wifi, Coffee, CreditCard } from "lucide-react";

const products = [
  {
    name: "Ice Mint Pod",
    description: "Pod descartável com sabor refrescante de menta",
    price: 60.00,
    image: "https://images.unsplash.com/photo-1563070784-bf59c2d38097?w=500&auto=format",
    time: "800 puffs"
  },
  {
    name: "Strawberry Dream",
    description: "Sabor intenso de morango com toque de creme",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1601415783626-db759b8e8a3b?w=500&auto=format",
    time: "1000 puffs"
  },
  {
    name: "Tropical Mix",
    description: "Blend tropical com manga e maracujá",
    price: 70.00,
    image: "https://images.unsplash.com/photo-1595980542930-a6bb27964e69?w=500&auto=format",
    time: "1200 puffs"
  },
];

const combos = [
  {
    name: "Duo Frutas",
    description: "2 pods com sabores frutados à sua escolha",
    price: 110.00,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format",
    time: "2000 puffs total"
  },
  {
    name: "Trio Premium",
    description: "3 pods da linha premium com case exclusivo",
    price: 180.00,
    image: "https://images.unsplash.com/photo-1600423115367-87ea7661688f?w=500&auto=format",
    time: "3000 puffs total"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="container mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Vape Store Premium</h1>
        <p className="text-xl text-gray-400 mb-8">A melhor seleção de pods descartáveis</p>
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

      {/* Combos Section */}
      <section className="container mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Combos Especiais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {combos.map((combo) => (
            <ProductCard key={combo.name} {...combo} />
          ))}
        </div>
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
            <p className="text-gray-400">Produtos selecionados e testados</p>
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
              @vapestore
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Vape Store Premium. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;