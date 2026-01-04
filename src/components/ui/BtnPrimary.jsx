import React from "react";

const BtnPrimary = ({ btnText }) => {
  return (
    <div>
      <button className="px-4 py-2 rounded-md bg-[#438A7A] text-white hover:bg-[#3A7669] transition]">
        {btnText}
      </button>
    </div>
  );
};

export default BtnPrimary;
