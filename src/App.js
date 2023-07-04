import "./App.css";
import Routing from "./Routing";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import BookAppointment from "./Components/Common/BookAppointment";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routing />
      </div>
    </Provider>
  );
}

export default App;
