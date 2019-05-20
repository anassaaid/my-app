import { combineReducers } from "redux";
import fluxReducer from "./fluxReducer";

export default combineReducers({
  flux: fluxReducer
});
