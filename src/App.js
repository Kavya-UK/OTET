import "./App.css";
import Routing from "./Routing";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
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
