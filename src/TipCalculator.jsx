import React, { useRef, useState } from "react";
import "./tipCalc.css";

const initialInputData = {
  billAmount: "",
  peopleAmount: "",
};

export default function TipCalculator() {
  const [inputBill, setInputBill] = useState(initialInputData);
  const [seviceQuality, setServiceQuality] = useState("");
  const [totalTip, setTotalTip] = useState("");
  const [tipPerPerson, setTipPerPerson] = useState("");

  // console.log(inputBill, "<<<");

  const handleInputChange = (e) => {
    const dynVal = e.target.name;
    const value = e.target.value;
    console.log(dynVal, value);
    setInputBill({
      ...inputBill,
      [dynVal]: value,
    });
  };
  const handleServiceQualityFn = (e) => {
    setServiceQuality(parseFloat(e.target.value));
  };

  const { billAmount, peopleAmount } = inputBill;

  const handleCalculate = () => {
    if (!billAmount || !seviceQuality || !peopleAmount) {
      return;
    }
    // e.preventDefault();
    const totalTip = (parseFloat(billAmount) * seviceQuality).toFixed(2);
    setTotalTip(totalTip);

    const tipPerPerson = (totalTip / parseFloat(peopleAmount)).toFixed(2);
    setTipPerPerson(tipPerPerson);

    console.log(totalTip);
  };
  return (
    <div id="container">
      <h1>Tip Calculator</h1>
      <div id="calculator">
        <form>
          <p>How much was your bill?</p>${" "}
          <input
            id="billamt"
            type="text"
            value={billAmount}
            name="billAmount"
            onChange={handleInputChange}
            placeholder="Bill Amount"
          />
          <p>How was your service?</p>
          <select onChange={handleServiceQualityFn} id="serviceQual">
            <option disabled selected value="0">
              -- Choose Tip Option --
            </option>
            <option value="0.3">30% - Outstanding</option>
            <option value="0.2">20% - Good</option>
            <option value="0.15">15% - It was OK</option>
            <option value="0.1">10% - Bad</option>
            <option value="0.05">5% - Terrible</option>
          </select>
        </form>
        <p>How many people are sharing the bill?</p>
        <input
          id="peopleamt"
          type="text"
          name="peopleAmount"
          value={peopleAmount}
          onChange={handleInputChange}
          placeholder="Number of People"
        />

        <button
          onClick={handleCalculate}
          className="button-calc"
          type="button"
          id="calculate"
        >
          Calculate!
        </button>
      </div>
      <div className="totalTip">
        <span>Total Tip: </span>
        <sup>$</sup>
        <span className="tip">{totalTip}</span>
      </div>
      <div className="totalTip">
        <span>Total tip per person: </span>
        <sup>$</sup>
        <span className="tip">{tipPerPerson}</span>
        <small id="each">/person</small>
      </div>
    </div>
  );
}
