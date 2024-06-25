import React from "react";
import { NewProducts } from "../content/newProducts";
import new1 from "/public/new1.png";
import new2 from "/public/new2.png";
import new3 from "/public/new3.png";
import new4 from "/public/new4.png";
import new5 from "/public/new5.png";

export const News = () => {
  return (
    <div className="container mb-[64px]">
      <h2 className="mb-[32px] font-bold text-3xl">Янги қўшилганлар</h2>
      <div className="flex items-center justify-between">
        <NewProducts
          img={new1}
          title={"1984"}
          desribtion={"SIYOSAT, FANTASTIKA"}
        />
        <NewProducts
          img={new2}
          title={"Rich dad poor dad"}
          desribtion={"SIYOSAT, FANTASTIKA"}
        />
        <NewProducts
          img={new3}
          title={"Код 8"}
          desribtion={"SIYOSAT, FANTASTIKA"}
        />
        <NewProducts
          img={new4}
          title={"Даниел КИЗ"}
          desribtion={"SIYOSAT, FANTASTIKA"}
        />
        <NewProducts
          img={new5}
          title={"Бепарволикнинг но..."}
          desribtion={"SIYOSAT, FANTASTIKA"}
        />
      </div>
    </div>
  );
};

export default News;
