import React from "react";

function ListIEdetails() {
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
          <span className="badge bg-danger rounded-pill">14</span>
        </li>
      </ol>
    </>
  );
}

export default ListIEdetails;
