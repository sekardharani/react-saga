import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Budget Planer</h1>
      {/* Componens 1 */}
      <div className="mb-3">
        <hr />
        <label htmlFor="formGroupExampleInput" className="form-label">
          Total Income
        </label>
        <h3 className="text-success">10000</h3>
        <hr />
      </div>
      {/* Componens 1 */}

      {/* Componens 2 */}

      <div className="row row-cols-2">
        <div className="col">
          <div className="mb-3">
            <hr />
            <label htmlFor="formGroupExampleInput" className="form-label">
              Income
            </label>
            <h3 className="text-success">10000</h3>
            <hr />
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <hr />
            <label htmlFor="formGroupExampleInput" className="form-label">
              Expense
            </label>
            <h3 className="text-danger">10000</h3>
            <hr />
          </div>
        </div>
      </div>
      {/* Componens 2 */}

      {/* Componens 3 */}
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
      {/* Componens 3 */}

      {/* Components 4 */}

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
            Address 2
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
      {/* Components 4 */}
    </div>
  );
}

export default App;
