import React from "react";
import stars from "/public/star.svg";
import pods from "/public/pods.svg";
import book from "/public/book.svg";

export const AudioProducts = ({ img, title, desribtion }) => {
  return (
    <div className="max-w-[240px] cursor-pointer transition hover:scale-[1.05]">
      <img className="mb-[18px]" src={img} alt="img" />
      <div className="px-[5px]">
        <h3 className=" font-bold text-xl">{title}</h3>
        <p className="font-secondfamily text-primary text-sm mb-[16px]">
          {desribtion}
        </p>
        <div className="flex items-center justify-between">
          <img src={stars} alt="img" />
          <div className="flex items-center gap-[16px]">
            <img src={pods} alt="img" />
            <img src={book} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioProducts;
