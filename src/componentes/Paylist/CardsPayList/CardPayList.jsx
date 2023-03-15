import React from "react";
import style from "./style.module.css";
import lixeiro from "../../../assets/trash.svg";

export const CardPayList = ({ item, removeItemFromPayList }) => {
  return (
    <li className={style.cardContainer}>
      <div className={style.valueContainer}>
        <h3 className={style.title}>{item.title}</h3>
        <span className={style.description}>{item.type}</span>
      </div>
      <span className={style.value}>R$ {item.money}</span>
      <button
        className={style.buttonDelete}
        onClick={() => removeItemFromPayList(item.id)}
      >
        <img src={lixeiro} alt="Deletar item" />
      </button>
    </li>
  );
};
