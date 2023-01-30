import React from "react";
import style from "./style.module.css";
import logo from "../../assets/NuKenzieindex.svg";

export const Navigation = ({ selectPage }) => {
  return (
    <header className={style.mainNav}>
      <img src={logo} alt="Logo" className={style.logo} />
      <button className={style.button} onClick={() => selectPage("Home")}>
        Inicio
      </button>
    </header>
  );
};
