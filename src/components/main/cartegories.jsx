import React from "react";
import { Category } from "../content/category";
import worldL from "/public/worldL.png";
import UZBL from "/public/UZBL.png";
import workL from "/public/workL.png";
import childrenL from "/public/childrenL.png";
import crimeL from "/public/crimeL.png";
import fantasticL from "/public/fantastikL.png";

export const Cartegories = () => {
  return (
    <div className="container mb-[64px]">
      <h2 className="font-bold mb-[32px] text-text text-3xl">Рукнлар</h2>
      <div className="flex gap-[16px]">
        <Category img={worldL} />
        <Category img={UZBL} />
        <Category img={workL} />
        <Category img={childrenL} />
        <Category img={crimeL} />
        <Category img={fantasticL} />
      </div>
    </div>
  );
};

export default Cartegories;
