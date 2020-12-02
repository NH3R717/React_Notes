import { createStore, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { todos } from "./todos/reducers";

const reducers = {
  todos,
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

// ! put reducers into a form that can be passed into the creat store imported
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

// ! return create store called with root reducer
export const configureStore = () =>
  createStore(
    persistedReducer,
    //! connects app to Redux dev tools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
