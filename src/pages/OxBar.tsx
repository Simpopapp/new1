import { BrandLayout } from "@/components/BrandLayout";
import { SingleUnits } from "@/components/sections/SingleUnits";
import { AllPacks } from "@/components/sections/AllPacks";

const OxBar = () => {
  return (
    <BrandLayout 
      brandName="Ox Bar"
      brandDescription="Pods descartáveis Ox Bar - Inovação e performance"
    >
      <div className="space-y-12">
        <img 
          src="https://www.oxbar.com/cdn/shop/files/20240715-172125.png?v=1721035393"
          alt="Ox Bar Pods"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-xl"
        />
        <SingleUnits />
        <AllPacks />
      </div>
    </BrandLayout>
  );
};

export default OxBar;