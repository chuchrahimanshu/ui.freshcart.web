import React from "react";

const LayoutStructure = ({ children, classNames }) => {
  return (
    <section className={`max-w-[1300px] mx-auto ${classNames}`}>
      {children}
    </section>
  );
};

export default LayoutStructure;
