import React, { useState } from "react";
import CurrencyMenu from "./CurrencyMenu";
import rates from "../assets/rates";
import { ArrowDown, ArrowUp } from "../assets/icons";
import "./Converters.css";

const Converters = () => {
  const [Curr1, setCurr1] = useState("EUR");
  const [Curr2, setCurr2] = useState("USD");
  const [amount, setAmount] = useState(["", ""]);
  let rate1 = 1;
  let rate2 = 1.2;

  return (
    <div className="motherbox">
      <h1>EURO DOLLAR DOUBLE CONVERTER</h1>
      <input
        type="text"
        className="inputConv"
        name="currency1"
        placeholder="entrez un chiffre"
        value={amount[0]}
        onChange={(event) => {
          setAmount([
            event.target.value,
            Math.floor((event.target.value * 1000 * rate2) / rate1) / 1000,
          ]);
        }}
      ></input>
      <div className="selectConv">EUR</div>
      🙆‍♀️
      <input
        type="text"
        className="inputConv"
        placeholder="entrez un chiffre"
        name="currency1"
        value={amount[1]}
        onChange={(event) => {
          setAmount([
            Math.floor((event.target.value * 1000 * rate1) / rate2) / 1000,
            event.target.value,
          ]);
        }}
      ></input>
      <div className="selectConv">USD</div>
    </div>
  );
};

export default Converters;
