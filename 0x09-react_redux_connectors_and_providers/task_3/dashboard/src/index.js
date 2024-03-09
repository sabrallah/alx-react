import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk"; // enables dispatching functions as actions
import App from "./App/App";
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Map } from "immutable";

// createStore(reducer, preloadedState, enhancer)
// allows us to specify middleware (thunk in this case)
// and dev tools (chrome extension) to enhance store
const store = createStore(
  uiReducer, // root reducer function
  Map(initialState), // initial state
  composeWithDevTools( // dev tools
    applyMiddleware(thunk) // middleware
  )
);

// ReactDOM.render(<App />, document.getElementById('root'));
// <Provider> component from react-redux makes the Redux store available
// to any nested components that have been wrapped in the connect()
// function from react-redux.

// <React.StrictMode> is a tool for finding potential problems
// in an application due to the way React works.
// It renders your components twice, which can help you catch bugs.
// The first render passes the component to ReactDOM.render(),
// and the second render pass does not go through ReactDOM.render()
// so that React can catch potentially problematic code.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
