import "./App.css";
import Routing from "./Routing";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./datePicker.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [location]);
  return (
    <Provider store={store}>
      <div className="App">
        <Routing />
      </div>
    </Provider>
  );
}

export default App;
