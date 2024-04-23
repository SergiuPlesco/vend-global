import React from "react";

const SectionWrapper = ({
  id,
  children,
}: {
  id?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <section id={id} className="pt-[50px] md:pt-[100px] px-4">
      {children}
    </section>
  );
};

export default SectionWrapper;
