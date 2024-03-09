import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App/App";
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Map } from "immutable";

const composeEnhancers = composeWithDevTools({
  // Options: https://zhenyong.github.io/webpack-mock-api/api/options.html
  actionsBlacklist: [],
  actionsWhitelist: [],
  name: "Redux DevTools",
  maxAge: 30,
  trace: true,
  traceLimit: 25,
});

const store = createStore(
  uiReducer,
  Map(initialState),
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

