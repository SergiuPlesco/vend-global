import React from "react";
import SectionWrapper from "@/components/section-wrapper/section-wrapper";
import SectionTitle from "@/components/section-title/section-title";
import { features } from "./data";

const Features = ({ id }: { id: string }) => {
  return (
    <SectionWrapper id={id}>
      <SectionTitle title="Trăsături" />

      <ul className="list-disc pl-4">
        {features.map((feature, index) => {
          return <li key={index}>{feature}</li>;
        })}
      </ul>
    </SectionWrapper>
  );
};

export default Features;
