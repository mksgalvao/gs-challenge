import { combineReducers } from "redux";
import PhonesReducer from "./phonesReducer";

const rootReducer = combineReducers({
  phones: PhonesReducer,
});

export default rootReducer;
