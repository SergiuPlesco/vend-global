import React from "react";
import SectionWrapper from "@/components/section-wrapper/section-wrapper";
import SectionTitle from "@/components/section-title/section-title";

const Features = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Trăsături" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <p>
          Alimentare de la orice port usb, încărcător telefon, Power bank, priză
          auto, alte surse (5v, 2A)
        </p>
        <p>
          Regulator pentru volumul lichidului, indicator al volumului, buton
          start.
        </p>
        <p>
          Cutie din lemn cu posibilitatea de a grava pe ea. Include un set de
          pahare.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Features;
