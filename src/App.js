import "./App.css";
import ListIEdetails from "./components/List_IE_details";
import IEdetails from "./components/IE_details";
import Adddetails from "./components/Add_IE_details";

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Budget Planer</h1>

      <IEdetails />

      <div className="row row-cols-2">
        <div className="col">
          <IEdetails />
        </div>
        <div className="col">
          <IEdetails />
        </div>
      </div>

      <ListIEdetails />

      <Adddetails />
    </div>
  );
}

export default App;
