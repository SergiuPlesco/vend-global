import React from "react";
import SectionTitle from "@/components/section-title/section-title";
import SectionWrapper from "@/components/section-wrapper/section-wrapper";

const Description = ({ id }: { id: string }) => {
  return (
    <SectionWrapper id={id}>
      <SectionTitle title="Ce este Auto-barmen" />

      <p className="text-center">
        <span className="font-medium">Auto-barmen</span> este un aparat pentru
        dozarea lichidelor alimentare în pahare.
      </p>
    </SectionWrapper>
  );
};

export default Description;
