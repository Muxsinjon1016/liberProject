import React from "react";

export const NavBar = () => {
  return (
    <>
      <hr />
      <div className="container">
        <nav>
          <ul className="py-[9px] flex items-center gap-[20px]">
            <li className="text-primary cursor-pointer font-semibold text-base">
              Аудиокитоб
            </li>
            <li className="text-primary cursor-pointer font-semibold text-base">
              Электрон китоблар
            </li>
            <li className="text-primary cursor-pointer font-semibold text-base">
              Босма китоблар
            </li>
            <li className="text-primary cursor-pointer font-semibold text-base">
              Контакт
            </li>
            <li className="text-primary cursor-pointer font-semibold text-base">
              Биз хақимизда
            </li>
          </ul>
        </nav>
      </div>
      <hr className="mb-[16px]" />
    </>
  );
};

export default NavBar;
