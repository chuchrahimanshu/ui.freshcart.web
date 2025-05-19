import React from "react";

const LayoutStructure = ({ children, classNames }) => {
  return (
    <section className={`max-w-[1300px] mx-auto px-10 ${classNames}`}>
      {children}
    </section>
  );
};

export default LayoutStructure;
