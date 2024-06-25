import React from "react";

export const Heroimgs = ({ img, title }) => {
  return (
    <div>
      <img
        className="cursor-pointer hover:scale-[1.1] transition"
        src={img}
        alt="img"
      />
      <p className="text-text font-normal text-xl">{title}</p>
    </div>
  );
};

export default Heroimgs;
