import React from "react";
import top1 from "/public/top1.png";
import top2 from "/public/top2.png";
import top3 from "/public/top3.png";
import { Heroimgs } from "../content/heroimgs";

export const Hero = () => {
  return (
    <div className="container flex items-center gap-[24px] mb-[56px]">
      <div className="bg-primarysoft overflow-hidden rounded-[12px] max-w-[1005px] pt-[32px] pb-[16px] pl-[32px] pr-[72px] relative">
        <p className="font-bold text-2xl text-text">Кўп ўқилаётганлар</p>
        <img
          className="absolute bottom-0 left-0"
          src="../public/heroimg.svg"
          alt="img"
        />
        <div className="flex items-center gap-[14px] text-center ml-[335px]">
          <Heroimgs img={top1} title={"1984"} />
          <Heroimgs img={top2} title={"Code 8"} />
          <Heroimgs img={top3} title={"Rich dad poor dad"} />
        </div>
      </div>
      <img
        className="cursor-pointer hover:scale-[1.05] transition"
        src="../public/heroCard.svg"
        alt="img"
      />
    </div>
  );
};

export default Hero;
