import React from "react";

function Adddetails() {
  return (
    <>
      <form className="row g-3 mt-1">
        <h3 className="text-left text-decoration-underline mt-1">
          Add Income / Expense Details
        </h3>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Details of Income / Expense
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder=" Details of Income / Expense"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Income / Expense
          </label>
          <input
            type="number"
            className="form-control"
            id="inputAddress2"
            placeholder="10000"
          />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Expense
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Adddetails;
