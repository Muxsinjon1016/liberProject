import React from "react";
import { AudioProducts } from "../content/audioproducts";
import audio1 from "/public/audio1.png";
import audio2 from "/public/audio2.png";
import audio3 from "/public/audio3.png";
import audio4 from "/public/audio4.png";
import audio5 from "/public/audio5.png";

export const Audios = () => {
  return (
    <div className="container mb-[93px]">
      <h2 className="mb-[32px] font-bold text-3xl">Янги қўшилганлар</h2>
      <div className="flex items-center justify-between">
        <AudioProducts
          img={audio2}
          title={"1984"}
          desribtion={"SIYOSAT, FANTASTIKA"}
        />
        <AudioProducts
          img={audio3}
          title={"Rich dad poor dad"}
          desribtion={"SIYOSAT, FANTASTIKA"}
        />
        <AudioProducts
          img={audio4}
          title={"Код 8"}
          desribtion={"SIYOSAT, FANTASTIKA"}
        />
        <AudioProducts
          img={audio1}
          title={"Даниел КИЗ"}
          desribtion={"SIYOSAT, FANTASTIKA"}
        />
        <AudioProducts
          img={audio5}
          title={"Бепарволикнинг но..."}
          desribtion={"SIYOSAT, FANTASTIKA"}
        />
      </div>
    </div>
  );
};

export default Audios;
