import React from "react";
import headerLogo from "../../public/banksalad-logo.svg";
import { listDummyData } from "../../public/dummyData";

const Header: React.FC = () => {
  return (
    <header>
      <img src={headerLogo} alt="header logo" />
    </header>
  );
};

export default Header;
