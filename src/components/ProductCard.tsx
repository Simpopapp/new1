import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { toast } from "sonner";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  time?: string;
  category: string;
}

const similarProducts = {
  v15: [
    {
      name: "Ignite V15 Vape Device",
      description: "Dispositivo V15 individual compacto e prático",
      price: 49.90,
      image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/products/ign_prodcreative0203.jpg?v=1680537677",
      time: "150 puffs"
    },
    {
      name: "Ignite V15 Vape Device [10 Pack]",
      description: "Pack com 10 unidades do V15, ideal para revendedores",
      price: 449.90,
      image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/ign_prodcreative-v15-retouch.jpg?v=1682638135",
      time: "1500 puffs total"
    }
  ],
  v35: [
    {
      name: "Ignite V35 Vape Device",
      description: "Dispositivo V35 com maior capacidade",
      price: 59.90,
      image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0201.jpg?v=1691183623",
      time: "350 puffs"
    },
    {
      name: "Ignite V35 Vape Device [10 Pack]",
      description: "Pack com 10 unidades do V35",
      price: 549.90,
      image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0195_1.jpg?v=1691183683",
      time: "3500 puffs total"
    }
  ],
  v50: [
    {
      name: "Ignite V50 Vape Device",
      description: "Dispositivo V50 com excelente duração",
      price: 69.90,
      image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0179_1.jpg?v=1691183359",
      time: "500 puffs"
    },
    {
      name: "Ignite V50 Vape Device [10 Pack]",
      description: "Pack com 10 unidades do V50",
      price: 599.90,
      image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/v50_SinglePack_LineupShot.jpg?v=1691693458",
      time: "5000 puffs total"
    }
  ],
  v60: [
    {
      name: "Ignite V60 - Mint",
      description: "Versão refrescante do V60 com sabor de menta",
      price: 69.90,
      image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0221.jpg?v=1691183189",
      time: "600 puffs"
    },
    {
      name: "Ignite V60 - Berry",
      description: "V60 com delicioso sabor de frutas vermelhas",
      price: 69.90,
      image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/2023_0226_Ignite_Nic_Studio_MikeKirschbaum_02.21.2023Igniteproductcreative0221.jpg?v=1691183189",
      time: "600 puffs"
    }
  ],
  v80: [
    {
      name: "Ignite V80 - Ice",
      description: "V80 com refrescante sabor de menta gelada",
      price: 89.90,
      image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V80_Couch.jpg?v=1713918859",
      time: "800 puffs"
    },
    {
      name: "Ignite V80 - Grape",
      description: "V80 com intenso sabor de uva",
      price: 89.90,
      image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V80_Grass.jpg?v=1713918893",
      time: "800 puffs"
    }
  ],
  v150: [
    {
      name: "Ignite V150 - Watermelon",
      description: "V150 com refrescante sabor de melancia",
      price: 129.90,
      image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/V150_BERRY-BLAST.png?v=1722018032",
      time: "1500 puffs"
    },
    {
      name: "Ignite V150 - Mango",
      description: "V150 com tropical sabor de manga",
      price: 129.90,
      image: "https://cdn.shopify.com/s/files/1/0072/5119/8050/files/BERRY_BLAST.webp?v=1720555805",
      time: "1500 puffs"
    }
  ]
};

export function ProductCard({ name, description, price, image, time, category }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleBuy = () => {
    toast.success("Produto adicionado ao carrinho!");
    setIsOpen(!isOpen);
  };

  return (
    <div className="space-y-4">
      <Card className="bg-secondary border-0 overflow-hidden group hover:scale-105 transition-transform duration-300">
        <CardHeader className="p-0">
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-xl mb-2 text-gold">{name}</CardTitle>
          <p className="text-sm text-gray-400 mb-2">{description}</p>
          {time && (
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {time}
            </div>
          )}
          <p className="text-2xl font-bold text-gold">
            R$ {price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-gradient-gold text-black hover:bg-gold hover:scale-105 transition-all duration-300"
            onClick={handleBuy}
          >
            Comprar Agora
          </Button>
        </CardFooter>
      </Card>

      {similarProducts[category as keyof typeof similarProducts] && (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {similarProducts[category as keyof typeof similarProducts].map((product, index) => (
                <Card key={index} className="bg-secondary border-0 overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-1 text-gold">{product.name}</CardTitle>
                    <p className="text-xs text-gray-400 mb-1">{product.description}</p>
                    {product.time && (
                      <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gold"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {product.time}
                      </div>
                    )}
                    <p className="text-xl font-bold text-gold">
                      R$ {product.price.toFixed(2)}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-gradient-gold text-black hover:bg-gold hover:scale-105 transition-all duration-300"
                      onClick={() => toast.success("Produto adicionado ao carrinho!")}
                    >
                      Comprar Agora
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  );
}