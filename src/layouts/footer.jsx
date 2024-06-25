import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="pt-[31px] pb-[63px] bg-primarysoft">
        <div className="container">
          <ul className="flex items-start gap-[150px]">
            <li>
              <p className="font-bold text-xl mb-[14px]">Платформа хақида</p>
              <p className="cursor-pointer text-lg font-normal mb-[18px]">
                Liber ўзи нима?
              </p>
              <p className="cursor-pointer text-lg font-normal mb-[18px]">
                Фойдаланиш шартлари
              </p>
              <p className="cursor-pointer text-lg font-normal">Ёрдам</p>
            </li>
            <li>
              <p className="font-bold text-xl mb-[14px]">Обуна хақида</p>
              <p className="cursor-pointer text-lg font-normal mb-[18px]">
                Обуна бўлиш
              </p>
              <p className="cursor-pointer text-lg font-normal">Қандай тўлаш</p>
            </li>
            <li>
              <p className="font-bold text-xl mb-[14px]">Китоблар</p>
              <p className="cursor-pointer text-lg font-normal mb-[18px]">
                Аудио китоблар
              </p>
              <p className="cursor-pointer text-lg font-normal mb-[18px]">
                Электрон китоблар
              </p>
              <p className="cursor-pointer text-lg font-normal">Китоблар</p>
            </li>
            <li>
              <p className="font-bold text-xl mb-[14px]">Мобил илова</p>
              <img
                className="mb-[16px] cursor-pointer"
                src="../public/footerGPlay.svg"
                alt="img"
              />
              <img
                className="cursor-pointer"
                src="../public/footerAStore.svg"
                alt="img"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-grayondark pt-[12px] pb-[34px]">
        <div className="container">
          <ul className="flex gap-[120px] items-start">
            <li>
              <p className="font-light mb-[12px] text-sm text-white">
                Ижтимоий тармоқлар
              </p>
              <ul className="flex items-center gap-[24px]">
                <li>
                  <img
                    className="cursor-pointer transition hover:scale-[1.3]"
                    src="../public/facebook.svg"
                    alt="img"
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer transition hover:scale-[1.3]"
                    src="../public/youtube.svg"
                    alt="img"
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer transition hover:scale-[1.3]"
                    src="../public/tictok.svg"
                    alt="img"
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer transition hover:scale-[1.3]"
                    src="../public/telegram.svg"
                    alt="img"
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer transition hover:scale-[1.3]"
                    src="../public/insta.svg"
                    alt="img"
                  />
                </li>
              </ul>
            </li>
            <li>
              <p className="font-light mb-[12px] text-sm text-white">
                Боғланиш
              </p>
              <ul className="flex items-center gap-[23px]">
                <li className="cursor-pointer font-light text-white text-base">
                  +998 90 253 77 53
                </li>
                <li className="cursor-pointer font-light text-white text-base">
                  support@liber.uz
                </li>
              </ul>
            </li>
            <li>
              <p className="font-light mb-[12px] text-sm text-white">
                Биз қабул қиламиз
              </p>
              <ul className="flex items-center gap-[8px]">
                <li className="py-[9px] px-[6px] bg-white rounded-[5px]">
                  <img
                    className="cursor-pointer"
                    src="../public/uzcard.png"
                    alt="img"
                  />
                </li>
                <li className="py-[9px] px-[6px] bg-white rounded-[5px]">
                  <img
                    className="cursor-pointer"
                    src="../public/humo.png"
                    alt="img"
                  />
                </li>
                <li className="py-[9px] px-[6px] bg-white rounded-[5px]">
                  <img
                    className="cursor-pointer"
                    src="../public/payme.svg"
                    alt="img"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
