import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./app/containers/App";
import "./theme/style.css";
import "./theme/style.scss";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { ActionListenerReducer } from "./lib/ActionListener";
import reducer from "./app/containers/Dashboard/reducer";
import { ToastProvider } from "react-toast-notifications";

const appReducer = combineReducers({
  actionListenerState: ActionListenerReducer,
  dashboardState: reducer,
});

const store: Store & {
  dispatch: any,
} = createStore(appReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </Provider>,
  document.getElementById("output")
);
