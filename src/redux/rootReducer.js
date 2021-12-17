import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import chocolateReducer from "./chocolate/chocolateReducer";
import iceCreamReducer from "./iceCream/iceCreameReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  chocolate: chocolateReducer,
});

export default rootReducer;
