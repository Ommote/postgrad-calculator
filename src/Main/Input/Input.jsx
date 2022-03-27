import React from "react";
import Button from "../Button/Button";

const Input = (props) => {
  const { searchAmount, setSearchAmount, repayAmount, setRepayAmount } = props;

  const updateAmount = (e) => {
    setSearchAmount(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={updateAmount} />
      <Button searchAmount={searchAmount} setRepayAmount={setRepayAmount} />
    </div>
  );
};

export default Input;
