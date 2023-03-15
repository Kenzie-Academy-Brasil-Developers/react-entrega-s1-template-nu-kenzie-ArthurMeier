import React from "react";
import CardPayList from "./CardsPayList";
import style from "./style.module.css";

export const PayList = ({ payList, removeItemFromPayList }) => {
  return (
    <div>
      <p className={style.containerTitle}>Resumo financeiro</p>
      <ul>
        {payList.length > 0 ? (
          <>
            {payList.map((item, index) => (
              <CardPayList
                key={index}
                item={item}
                removeItemFromPayList={removeItemFromPayList}
              />
            ))}
          </>
        ) : (
          <p className={style.containerDescription}>
            Você ainda não possui nenhum lançamento
          </p>
        )}
      </ul>
    </div>
  );
};
