import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { mainReducer } from "./reducer";

const compose = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(mainReducer, compose);
