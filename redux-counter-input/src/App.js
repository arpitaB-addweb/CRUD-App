import './App.css';
import { Provider } from "react-redux";
import store from "../src/store/Store";

import CounterContainer from "./components/CounterContainer";
function App() {
  return (

    <Provider store={store}>
      <CounterContainer />
    </Provider>

  );
}

export default App;
