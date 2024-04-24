import React from "react";
import SectionWrapper from "@/components/section-wrapper/section-wrapper";
import SectionTitle from "@/components/section-title/section-title";

const Delivery = ({ id }: { id: string }) => {
  return (
    <SectionWrapper id={id}>
      <SectionTitle title="Livrare" />
      <p>În raza Mun. Chișinău - 50 MDL</p>
      <p>Pe teritoriul Republicii Moldova, în afara Mun. Chișinău - 100 MDL </p>
      <p>Termen de livrare 3-48 ore</p>
    </SectionWrapper>
  );
};

export default Delivery;
