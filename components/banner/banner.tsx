import React from "react";
import Image from "next/image";
import bannerImage from "@/public/assets/banner-main.png";

const Banner = () => {
  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-2 justify-items-stretch gap-10 my-[50px] md:my-[150px]">
      <div className="justify-self-center md:justify-self-start self-center">
        <h1 className="text-4xl text-center md:text-left md:text-5xl mb-4">
          Auto-barmen
        </h1>
        <p className="text-xl md:text-2xl text:center md-text-left mb-2">
          Cadoul perfect pentru bărbați.
        </p>
        <p className="text-sm text-center md:text-left">
          Tu te distrezi, iar eu îți umplu paharele.
        </p>
      </div>
      <div className="justify-self-center md:justify-self-end self-center">
        <Image
          src={bannerImage}
          alt="auto barmen"
          width={377}
          height={438}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
