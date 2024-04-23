import React from "react";
import Navigation from "@/containers/navigation/navigation";
import Logo from "@/components/logo/logo";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
