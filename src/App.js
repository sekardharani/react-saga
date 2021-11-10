import "./App.css";
import ListIEdetails from "./components/List_IE_details";
import IEdetails from "./components/IE_details";
import Adddetails from "./components/Add_IE_details";
import { Provider } from "react-redux";
import Store from "./store/index";

function App() {
  //const budget = useSelector((state) => state);

  return (
    <Provider store={Store}>
      <div className="container">
        <h1 className="text-center">Budget Planer</h1>

        <IEdetails labelName={"Total"} olor={"text-success"} />

        <div className="row row-cols-2">
          <div className="col">
            <IEdetails labelName={"Income"} color={"text-success"} />
          </div>
          <div className="col">
            <IEdetails labelName={"Expence"} color={"text-danger"} />
          </div>
        </div>

        <ListIEdetails />

        <Adddetails />
      </div>
    </Provider>
  );
}

export default App;
