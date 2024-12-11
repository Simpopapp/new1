import { PremiumSection } from "@/components/PremiumSection";
import { SingleUnits } from "@/components/sections/SingleUnits";
import { PackUnits } from "@/components/sections/PackUnits";
import { EconomyLine } from "@/components/sections/EconomyLine";
import { Wifi, Coffee, CreditCard } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

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
          <PremiumSection onButtonClick={() => {
            document.getElementById('v150-section')?.scrollIntoView({ behavior: 'smooth' });
          }} />
          {/* Adicione mais produtos em destaque aqui se necessário */}
        </div>
      </section>

      {/* Combos Section */}
      <section className="container mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Combos Especiais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Combos temporários */}
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Combo Iniciante</h3>
            <p className="text-gray-400">2x V60 + 1x V80</p>
            <p className="text-2xl font-bold text-gold mt-4">R$ 199,90</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Combo Premium</h3>
            <p className="text-gray-400">1x V150 + 2x V80</p>
            <p className="text-2xl font-bold text-gold mt-4">R$ 259,90</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Combo Econômico</h3>
            <p className="text-gray-400">3x V35 + 1x V60</p>
            <p className="text-2xl font-bold text-gold mt-4">R$ 179,90</p>
          </div>
        </div>
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

        <section id="v60-section" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Linha V60</h2>
          <SingleUnits />
        </section>

        <section id="economy-section" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Linha Econômica</h2>
          <EconomyLine />
        </section>
      </ScrollArea>

      {/* Amenities Section */}
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