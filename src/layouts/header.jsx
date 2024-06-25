import React from "react";
import User from "../assets/user";

export const Header = () => {
  return (
    <>
      <div className="container py-[22px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-[46px] items-center">
            <img
              className="cursor-pointer"
              src="../public/logo.svg"
              alt="logo"
            />
            <div className="flex items-center gap-[4px]">
              <div className="py-[9px] pl-[24px] pr-[18px] flex items-center gap-[12px] border rounded-l-[14px] border-[#e1e1e1]">
                <img src="../public/header_options.svg" alt="img" />
                <select className="outline-none flex items-center cursor-pointer text-primary font-semibold font-fontfemily">
                  <option>Рукнлар</option>
                  <option>Ruknlar</option>
                </select>
              </div>
              <div className="flex items-center justify-between overflow-hidden border rounded-r-[14px] border-[#e1e1e1]">
                <form>
                  <input
                    type="text"
                    className="py-[9px] pl-[29px] pr-[275px] text-primary outline-none cursor-text"
                    placeholder="Қидириш"
                  />
                </form>
                <img
                  className="cursor-pointer pl-[19px] pr-[27px] border-l py-[9px]"
                  src="../public/searchIcon.svg"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div
            className="flex
          items-center gap-[20px]"
          >
            <div className="flex py-[9px] px-[16px] items-center gap-[9px] bg-primarysoft rounded-[14px]">
              <img src="../public/UZBflag.svg" alt="img" />
              <select className="text-primary border-none outline-none shadow-none flex items-center gap-[8px] cursor-pointer bg-transparent">
                <option>Ўз</option>
                <option>UZ</option>
              </select>
            </div>
            <div className="border rounded-[14px] bg-primary text-white hover:text-primary hover:bg-white transition border-primary py-[12px] px-[24px]">
              <a className="flex items-center gap-[12px]" href="#">
                <User />
                <p>Кириш</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
