import { combineReducers } from "redux";
import PhonesReducer from "./phonesReducer";

const RootReducer = combineReducers({
  phones: PhonesReducer,
});

export default RootReducer;
