import React from "react";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full max-w-5xl pt-[50px] md:pt-[100px] px-4">
      {children}
    </section>
  );
};

export default SectionWrapper;
