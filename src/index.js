import React from "react";
import ReactDOM from "react-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
// ! makes the Redux store available to any nested components that have been wrapped in the connect() function, wrap all components that will use the redux store
import { Provider } from "react-redux";
// !
import { configureStore } from "./store";
import App from "./App.js";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
