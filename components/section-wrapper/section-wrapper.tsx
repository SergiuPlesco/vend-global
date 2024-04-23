import React from "react";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <section className="pt-[50px] md:pt-[100px] px-4">{children}</section>;
};

export default SectionWrapper;
