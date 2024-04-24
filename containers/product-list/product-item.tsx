import Image from "next/image";
import Link from "next/link";

import { ProductItemType } from "./data";
import { SECTIONS_IDS } from "@/app/constants/sections-ids";

const ProductItem = ({ item }: { item: ProductItemType }) => {
  return (
    <div className="border rounded-sm border-[-background-secondary] shadow-md shadowr-[-background-secondary]">
      <div className="h-[375px] bg-[--background-secondary] rounded-t-sm mb-4">
        <Image
          src={item.image}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          alt={item.title}
        />
      </div>
      <h3 className="font-semibold text-center mb-2">{item.title}</h3>
      <div className="flex flex-col items-start gap-2 p-4">
        <p>{item.description}</p>
        <div>
          <p className="text-sm font-bold">Dimensiuni</p>
          <p>lățime: {item.size.width} cm</p>
          <p>lungime: {item.size.length} cm</p>
          <p>înălțime: {item.size.height} cm</p>
        </div>
        <div className="w-full">
          <p className="text-center font-bold">{item.price} MDL</p>
        </div>
        <div className="flex justify-center w-full my-4">
          <Link
            href={`#${SECTIONS_IDS.order}`}
            className="bg-black text-white py-2 px-4 rounded-sm hover:bg-slate-800 hover:scale-105"
          >
            Comandă
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
