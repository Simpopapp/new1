import { BrandLayout } from "@/components/BrandLayout";
import { SingleUnits } from "@/components/sections/SingleUnits";
import { AllPacks } from "@/components/sections/AllPacks";

const LostMary = () => {
  return (
    <BrandLayout 
      brandName="Lost Mary"
      brandDescription="Pods descartáveis Lost Mary - Qualidade e sabor incomparáveis"
    >
      <div className="space-y-12">
        <img 
          src="https://mipod.com/cdn/shop/files/lostmary-mo20000_sampler-image_600x600.png?v=1716393277"
          alt="Lost Mary Pods"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-xl"
        />
        <SingleUnits />
        <AllPacks />
      </div>
    </BrandLayout>
  );
};

export default LostMary;