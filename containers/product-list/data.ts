import autobarmen41 from "@/public/assets/set-4-1-removebg.png";
import autobarmen42 from "@/public/assets/set-4-2-removebg.png";
import autobarmen43 from "@/public/assets/set-4-3-removebg.png";
import autobarmen61 from "@/public/assets/set-6-1-removebg.png";
import autobarmen62 from "@/public/assets/set-6-2-removebg.png";
import autobarmen63 from "@/public/assets/set-6-3-removebg.png";
import autobarmen81 from "@/public/assets/set-8-1-removebg.png";
import autobarmen82 from "@/public/assets/set-8-2-removebg.png";
import autobarmen83 from "@/public/assets/set-8-3-removebg.png";
import { StaticImageData } from "next/image";

export type ProductItemType = {
  title: string;
  image: StaticImageData;
  description: string;
  size: {
    width: number;
    length: number;
    height: number;
  };
};

export const products: ProductItemType[] = [
  {
    title: "Auto-barmen 4",
    image: autobarmen41,
    description: "Include set de 4 pahare",
    size: {
      width: 21,
      length: 26,
      height: 12,
    },
  },
  {
    title: "Auto-barmen 6",
    image: autobarmen61,
    description: "Include set de 6 pahare",
    size: {
      width: 25,
      length: 26,
      height: 12,
    },
  },
  {
    title: "Auto-barmen 8",
    image: autobarmen81,
    description: "Include set de 8 pahare",
    size: {
      width: 30,
      length: 26,
      height: 12,
    },
  },
];
