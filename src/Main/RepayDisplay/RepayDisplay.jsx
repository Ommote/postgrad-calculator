import React from "react";

const RepayDisplay = (props) => {
  const { repayAmount, searchAmount } = props;
  return (
    <div>
      <h4>
        Based on your monthly earnings of £{searchAmount / 12}, you will repay £
        {repayAmount} per month on your Postgraduate loan.
      </h4>
    </div>
  );
};

export default RepayDisplay;
