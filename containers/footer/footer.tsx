import React from "react";
import {
  FaPhoneAlt,
  FaViber,
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full pt-10 pb-5 mt-20 border-t bg-[--background-banner]">
      <div className="flex flex-col md:flex-row md:justify-between gap-6 w-full max-w-5xl mx-auto px-4 mb-10">
        <div className="flex flex-col gap-2 mb-4">
          <p className="font-semibold">Contactează-ne</p>
          <a
            href="tel:060413353"
            className="flex justify-start items-center gap-4"
          >
            <FaPhoneAlt size={"1.5em"} /> 060413353
          </a>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <p className="font-semibold">Scrie-ne</p>
          <div className="flex justify-start gap-4">
            <FaViber size={"1.5em"} />
            <FaWhatsapp size={"1.5em"} />
            <FaTelegramPlane size={"1.5em"} />
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <p className="font-semibold">Urmărește-ne</p>
          <div className="flex justify-start gap-4">
            <FaFacebook size={"1.5em"} />
            <FaInstagram size={"1.5em"} />
            <FaTiktok size={"1.5em"} />
          </div>
        </div>
      </div>
      <p className="text-center font-bold">
        Vend Global {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
