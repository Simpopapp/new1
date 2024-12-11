import { BrandLayout } from "@/components/BrandLayout";
import { SingleUnits } from "@/components/sections/SingleUnits";
import { AllPacks } from "@/components/sections/AllPacks";

const ElfBar = () => {
  return (
    <BrandLayout 
      brandName="Elf Bar"
      brandDescription="Pods descartáveis Elf Bar - Experiência premium em cada tragada"
    >
      <div className="space-y-12">
        <img 
          src="https://elfbarbrasil.com/elfbar/bc10000-black-gold/"
          alt="Elf Bar Pods"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-xl"
        />
        <SingleUnits />
        <AllPacks />
      </div>
    </BrandLayout>
  );
};

export default ElfBar;