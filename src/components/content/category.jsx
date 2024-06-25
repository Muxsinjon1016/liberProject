import React from "react";

export const Category = ({ img }) => {
  return (
    <div>
      <img className="cursor-pointer transition hover:scale-[1.05]" src={img} alt="img" />
    </div>
  );
};

export default Category;
