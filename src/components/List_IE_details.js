import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  requestApiData,
  receiveApiData,
  errorApiData,
} from "../store/action/actionCreator";

function ListIEdetails() {
  const budget = useSelector((state) => state);

  const dispatch = useDispatch();

  const fectchBudget = async () => {
    dispatch(requestApiData());
    const response = await fetch("http://localhost:3004/budgets");

    const data = await response.json();
    console.log(data[0]);
    dispatch(receiveApiData(data[0].budgetdata));
  };

  const addBudget = async () => {
    dispatch(requestApiData());
    setTimeout(function () {
      dispatch(receiveApiData({ name: "sekar", age: 36 }));
    }, 1500);
  };

  useEffect(() => {
    fectchBudget();
  }, []);

  return (
    <>
      <h3 className="text-left text-decoration-underline ">
        Income / Expense Details
      </h3>
      <ol
        className="list-group list-group-numbered"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
          </div>
          <span className="badge bg-success rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
          </div>
          <span className="badge bg-danger rounded-pill" onClick={addBudget}>
            14
          </span>
        </li>
      </ol>
    </>
  );
}

export default ListIEdetails;
