import React, { useState } from "react";
import style from "./style.module.css";

export const CreateCard = ({ addItemToPayList }) => {
  const [formData, setFormData] = useState({
    title: "",
    money: "",
    type: "",
  });
  const submit = (event) => {
    event.preventDefault();
    if (
      formData.title !== "" &&
      formData.money !== "" &&
      formData.type !== ""
    ) {
      addItemToPayList(formData);
    } else {
      alert("Todos os campos precisam ser preenchidos");
    }
    setFormData({
      title: "",
      money: "",
      type: "",
    });
  };

  return (
    <form onSubmit={submit} noValidate className={style.form}>
      <fieldset className={style.fieldsetTitle}>
        <p className={style.title}>Descrição</p>
        <input
          className={style.inputTitle}
          value={formData.title}
          type="text"
          name="title"
          placeholder="Digite aqui sua descrição"
          onChange={(event) =>
            setFormData({ ...formData, title: event.target.value })
          }
        />
        <span className={style.exemple}>Ex: Compra de roupas</span>
      </fieldset>
      <div className={style.fieldsetContainer}>
        <fieldset className={style.fieldsetMoney}>
          <p className={style.title}>Valor</p>
          <input
            className={style.inputMoney}
            value={formData.money}
            type="number"
            name="money"
            placeholder="1"
            onChange={(event) =>
              setFormData({ ...formData, money: event.target.value })
            }
          />
        </fieldset>
        <fieldset className={style.fieldsetType}>
          <p className={style.title}>Tipo do Valor</p>
          <select
            className={style.selectType}
            value={formData.type}
            onChange={(event) =>
              setFormData({ ...formData, type: event.target.value })
            }
          >
            <option value="">Tipo de transação</option>
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
        </fieldset>
      </div>
      <button className={style.formButton} type="submit">
        Inserir valor
      </button>
    </form>
  );
};
