import React from "react";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full pt-10 pb-5 mt-20 border-t bg-[--background-banner]">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Contactează direct</p>
          <a
            href="tel:060413353"
            className="flex justify-start items-center gap-4"
          >
            <Phone /> 060413353
          </a>
        </div>
        <p className="text-center font-bold">
          Vend Global {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
