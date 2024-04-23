import React from "react";
import SectionTitle from "@/components/section-title/section-title";
import SectionWrapper from "@/components/section-wrapper/section-wrapper";
import ProductItem from "./product-item";
import { products } from "./data";

const ProductList = ({ id }: { id: string }) => {
  return (
    <SectionWrapper id={id}>
      <SectionTitle title="Versiuni Auto-barmen" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item) => {
          return <ProductItem key={item.title} item={item} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default ProductList;
