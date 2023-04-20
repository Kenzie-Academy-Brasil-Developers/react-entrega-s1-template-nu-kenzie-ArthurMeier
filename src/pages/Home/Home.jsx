import React from "react";
import style from "./style.module.css";
import logo from "../../assets/NuKenzie.svg";
import image from "../../assets/Illustration.svg";

const Home = ({ selectPage }) => {
  return (
    <>
      <div className={style.mainBody}>
        <div className={style.container}>
          <img className={style.logo} src={logo} alt="Logo Nu Kenzie" />
          <p className={style.title}>Centralize o controle das suas finanças</p>
          <span className={style.subTitle}>de forma rápida e segura</span>
          <button
            className={style.initBtn}
            onClick={() => selectPage("Dashboard")}
          >
            Iniciar
          </button>
        </div>
        <img className={style.illustrationImg} src={image} alt="ilustracao" />
      </div>
    </>
  );
};

export default Home;
