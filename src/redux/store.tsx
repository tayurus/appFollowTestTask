import { createStore, applyMiddleware } from "redux";
// он тут особо не нужен, но пусть хоть dispatch в action прокидывает
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";

const loggerMiddleware = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
