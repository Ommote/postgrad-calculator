import React from "react";

const RepayDisplay = (props) => {
  const { repayAmount, searchAmount } = props;
  return (
    <div>
      <h4>
        Based on your monthly earnings of £{Math.ceil(searchAmount / 12)}, you
        will repay £{Math.floor(repayAmount)} per month on your Postgraduate
        loan.
      </h4>
    </div>
  );
};

export default RepayDisplay;
