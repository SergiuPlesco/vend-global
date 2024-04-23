import React from "react";
import Image from "next/image";
import bannerImage from "@/public/assets/banner-main.png";

const Banner = () => {
  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-2 justify-items-stretch gap-10 my-[50px] md:my-[150px]">
      <div className="justify-self-center md:justify-self-start self-center">
        <h1 className="text-4xl md:text-6xl text-center md:text-left mb-8">
          Auto-barmen
        </h1>
        <h2 className="text-xl md:text-3xl text:center md-text-left mb-2">
          Cadoul perfect pentru bărbați.
        </h2>
        <p className="text-sm md:text-md text-center md:text-left">
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
