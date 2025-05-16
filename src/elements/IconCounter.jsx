import React from "react";

const IconCounter = ({ icon, count = 0, max = 9, size = "w-8 h-8" }) => {
  const showCount = count > max ? `${max}+` : count;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${size} group cursor-pointer`}>
      {icon}

      {count > 0 && (
        <span
          aria-label={`You have ${showCount} new notifications`}
          className="
            absolute top-[0px] -right-[2px]
            min-w-[1rem] h-[16px]
            px-[4px]
            bg-[#198754] text-white text-[11px] font-semibold
            rounded-full
            flex items-center justify-center
            shadow-md
            transition-transform duration-200
            group-hover:scale-110
            select-none
            pointer-events-none
          ">
          {showCount}
        </span>
      )}
    </div>
  );
};

export default IconCounter;
