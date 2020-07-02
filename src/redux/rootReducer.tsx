import { combineReducers } from "redux";

import { fieldReducer } from "./field";

const rootReducer = combineReducers({
  fieldReducer,
});

export default rootReducer;
