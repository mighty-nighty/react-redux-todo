import { combineReducers } from "redux";
import groupsReducer from "./groupsReducer";
import layoutReducer from "./layoutReducer";

const rootReducer = combineReducers({
  groups: groupsReducer,
  layout: layoutReducer
})

export default rootReducer;