import React, { useState } from "react";
import Input from "./Input/Input";
import RepayDisplay from "./RepayDisplay/RepayDisplay";
import "./Main.scss";

const Main = () => {
  const [searchAmount, setSearchAmount] = useState("");
  const [repayAmount, setRepayAmount] = useState("");

  return (
    <div>
      <div className="calculator-app">
        <Input
          searchAmount={searchAmount}
          setSearchAmount={setSearchAmount}
          setRepayAmount={setRepayAmount}
        />
        {repayAmount && (
          <RepayDisplay
            searchAmount={searchAmount}
            repayAmount={repayAmount}
            setRepayAmount={setRepayAmount}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
