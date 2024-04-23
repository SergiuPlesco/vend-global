import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-xl md:text-3xl font-semibold text-center mb-8">
      {title}
    </h2>
  );
};

export default SectionTitle;
