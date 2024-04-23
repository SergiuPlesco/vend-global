import React from "react";
import SectionTitle from "@/components/section-title/section-title";
import SectionWrapper from "@/components/section-wrapper/section-wrapper";

const ProductTypes = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Versiuni de Auto-barmen" />
      <div className="grid grid-cols-1 md:grid-cols-3"></div>
    </SectionWrapper>
  );
};

export default ProductTypes;
