import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider as MyProvider } from "react-redux";
import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import redux from './components/redux';
import { Provider } from "./components/context/context";
const store = legacy_createStore(redux, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider >
  <MyProvider store={store}>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </MyProvider>
  </Provider>
);

reportWebVitals();
