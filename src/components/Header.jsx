import React from "react";
import LayoutStructure from "./LayoutStructure";
import LOGO from "../assets/images/LOGO.svg";
import { RiShoppingBag3Line, RiUser3Line, RiHeart3Line } from "react-icons/ri";
import IconCounter from "../elements/IconCounter";

const Header = () => {
  return (
    <LayoutStructure classNames="flex items-center justify-between h-[80px]">
      <img src={LOGO} alt="FreshCart" className="cursor-pointer" />
      <div className="flex items-center gap-[17px]">
        <IconCounter
          icon={
            <RiHeart3Line className="text-[22px] text-[#5c6c75] cursor-pointer" />
          }
          count={5}
        />
        <RiUser3Line className="text-[22px] text-[#5c6c75] cursor-pointer" />
        <IconCounter
          icon={
            <RiShoppingBag3Line className="text-[22px] text-[#5c6c75] cursor-pointer" />
          }
          count={9}
        />
      </div>
    </LayoutStructure>
  );
};

export default Header;
