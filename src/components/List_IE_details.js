import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestApiData, receiveApiData } from "../store/action/actionCreator";

function ListIEdetails() {
  const budget = useSelector((state) => state);
  const [listData, setListData] = useState([]);
  console.log(budget);
  const dispatch = useDispatch();

  const fectchBudget = async () => {
    dispatch(requestApiData());
    const response = await fetch("http://localhost:3004/budgets");
    const data = await response.json();
    dispatch(receiveApiData(data[0]));
    setListData(data[0].budgetdata);
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

  useEffect(() => {
    console.log(listData);
  }, [listData]);

  return (
    <>
      <h3 className="text-left text-decoration-underline ">
        Income / Expense Details
      </h3>
      <ol
        className="list-group list-group-numbered"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {listData.map((list, i) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={i}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{list.description}</div>
            </div>

            <span
              className={`badge rounded-pill ${
                list.isExpense === "true" ? "bg-danger" : "bg-success"
              }`}
            >
              {list.amount}
            </span>
          </li>
        ))}
        {/* <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
          </div>
          <span className="badge bg-danger rounded-pill" onClick={addBudget}>
            14
          </span>
        </li> */}
      </ol>
    </>
  );
}

export default ListIEdetails;
