import React, { useState, useEffect } from "react";
import { addData } from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";
function Adddetails() {
  const budget = useSelector((state) => state);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [enableExpense, setenableExpense] = useState(true);
  const [enableSubmit, setenableSubmit] = useState(true);
  const dispatch = useDispatch();
  const addBudget = (e) => {
    e.preventDefault();
    console.log(enableExpense);
    if (enableSubmit !== true) {
      //alert("yes");
      let oldData = budget.budgetReducer.budgetdata;
      oldData[0].push({
        id: oldData[0].length + 1,
        description: description,
        amount: Number(amount),
        isExpense: enableExpense.toString(),
      });
      fetch("http://localhost:3004/budgets", {
        method: "POST",
        body: JSON.stringify(budget.budgetReducer),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            console.log(response.statusText);
          }
          // response.json();
          // console.log(response.json());

          dispatch(addData(budget));
        })
        .then((data) => {
          console.log(data);
        });
      setDescription("");
      setAmount("");
      setenableExpense(true);
    }
  };

  const budgetFormValidation = () => {
    if (
      description !== null &&
      amount !== null &&
      description !== "" &&
      amount !== ""
    ) {
      setenableSubmit(false);
    } else {
      setenableSubmit(true);
    }
  };

  useEffect(() => {
    budgetFormValidation();
  }, [description, amount]);

  return (
    <>
      <form className="row g-3 mt-1">
        <h3 className="text-left text-decoration-underline mt-1">
          Add Income / Expense Details
        </h3>

        <div className="col-12">
          <label htmlFor="description" className="form-label">
            Details of Income / Expense
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder=" Details of Income / Expense"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="amount" className="form-label">
            Income / Expense
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            placeholder="10000"
            value={amount}
            onChange={(e) => setAmount(e.currentTarget.value)}
          />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="iecheckbox"
              defaultChecked
              onChange={(e) => setenableExpense(e.currentTarget.checked)}
            />
            <label className="form-check-label" htmlFor="iecheckbox">
              Expense
            </label>
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={enableSubmit}
            onClick={(e) => {
              addBudget(e);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Adddetails;
