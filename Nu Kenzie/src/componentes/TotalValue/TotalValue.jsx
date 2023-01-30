import React from "react";
import style from "./style.module.css";

export const TotalValue = ({ payList }) => {
  function renderAmountOfMoney(payList) {
    let newValue = 0;
    payList.forEach((item) => {
      let money = parseInt(item.money, 10);
      if (item.type == "despesa") {
        money = money * -1;
        console.log(money);
      }
      newValue = money + newValue;
    });
    return newValue;
  }
  return (
    <div className={style.totalValueContainer}>
      <div className={style.infoContainer}>
        <h2 className={style.title}>Valor Total</h2>
        <p className={style.money}>R$ {renderAmountOfMoney(payList)}</p>
      </div>
      <span className={style.description}>O valor se refere ao saldo</span>
    </div>
  );
};
