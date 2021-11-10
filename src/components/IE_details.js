import React from "react";
import { useSelector } from "react-redux";
function IEdetails({ labelName = "Income", color = "text-success" }) {
  const budget = useSelector((state) => state);
  console.log(budget);
  return (
    <>
      <div className="mb-3">
        <hr />
        <label htmlFor="formGroupExampleInput" className="form-label">
          {labelName}
        </label>
        {labelName === "Total" ? (
          <h3 className={color}>{budget.budgetReducer.total}</h3>
        ) : null}
        {labelName === "Income" ? (
          <h3 className={color}>{budget.budgetReducer.income}</h3>
        ) : null}
        {labelName === "Expence" ? (
          <h3 className={color}>{budget.budgetReducer.expence}</h3>
        ) : null}
        <hr />
      </div>
    </>
  );
}

export default IEdetails;
