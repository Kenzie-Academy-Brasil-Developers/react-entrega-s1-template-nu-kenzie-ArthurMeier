import React, { useState } from "react";
import CreateCard from "../../componentes/CreateCard";
import PayList from "../../componentes/Paylist";
import Navigation from "../../componentes/Navigation";
import TotalValue from "../../componentes/TotalValue";
import style from "./style.module.css";

const Dashboard = ({
  payList,
  addItemToPayList,
  removeItemFromPayList,
  selectPage,
}) => {
  function renderPaylist(payList) {
    if (payList.length > 0) {
      return <TotalValue payList={payList} />;
    }
  }
  return (
    <div>
      <Navigation selectPage={selectPage} />
      <div className={style.container}>
        <div>
          <CreateCard addItemToPayList={addItemToPayList} />
          {renderPaylist(payList)}
        </div>
        <PayList
          payList={payList}
          removeItemFromPayList={removeItemFromPayList}
        />
      </div>
    </div>
  );
};

export default Dashboard;
