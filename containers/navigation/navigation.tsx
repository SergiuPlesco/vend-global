import React from "react";
import Link from "next/link";
import { SECTIONS_IDS } from "@/app/constants/sections-ids";

const Navigation = () => {
  return (
    <nav className="hidden sm:block">
      <ul className="flex justify-start gap-6">
        <li>
          <Link href={`#${SECTIONS_IDS.description}`}>Ce este Auto-barmen</Link>
        </li>
        <li>
          <Link href={`#${SECTIONS_IDS.features}`}>Trăsături</Link>
        </li>
        <li>
          <Link href={`#${SECTIONS_IDS.products}`}>Versiuni</Link>
        </li>
        <li>
          <Link href={`#${SECTIONS_IDS.products}`}>Preț</Link>
        </li>
        <li>
          <a href={`#${SECTIONS_IDS.delivery}`}>Livrare</a>
        </li>
        <li>
          <Link href={`#${SECTIONS_IDS.order}`}>Comandă acum</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
