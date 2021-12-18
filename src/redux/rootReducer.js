import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import chocolateReducer from "./chocolate/chocolateReducer";
import iceCreamReducer from "./iceCream/iceCreameReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  chocolate: chocolateReducer,
  user: userReducer,
});

export default rootReducer;
