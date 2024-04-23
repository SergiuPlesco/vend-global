import React from "react";
import SectionWrapper from "@/components/section-wrapper/section-wrapper";
import SectionTitle from "@/components/section-title/section-title";
import { process } from "./data";
const HowItWorks = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Cum lucrează" />
      <ul className="list-disc pl-4">
        {process.map((process) => {
          return <li>{process}</li>;
        })}
      </ul>
    </SectionWrapper>
  );
};

export default HowItWorks;
