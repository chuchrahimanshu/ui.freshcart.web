import React from "react";
import LayoutStructure from "./LayoutStructure";

const SubHeader = () => {
  return (
    <section className="h-[30px] bg-[#f1f3f3] flex items-center">
      <LayoutStructure classNames="flex items-center justify-center w-full">
        <p className="text-sm font-medium text-[#5c6c75]">
          Super Value Deals - Save more with coupons
        </p>
      </LayoutStructure>
    </section>
  );
};

export default SubHeader;
