import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { searchAmount, setRepayAmount } = props;

  const calculateAmount = () => {
    let yearlySalary = searchAmount;
    let monthlySalary = yearlySalary / 12;
    let threshold = 1750;
    let repaymentAmount;
    if (monthlySalary >= 1750) {
      let amountOverThreshold = monthlySalary - threshold;
      console.log(Math.ceil(amountOverThreshold));
      repaymentAmount = amountOverThreshold * 0.06;
      console.log(repaymentAmount);
    }
    setRepayAmount(repaymentAmount);
  };
  return (
    <button className="calculator-button" onClick={calculateAmount}>
      Calculate Repayments
    </button>
  );
};

export default Button;
