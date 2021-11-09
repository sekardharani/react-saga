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
        <h3 className={color}>10000</h3>
        <hr />
      </div>
    </>
  );
}

export default IEdetails;
