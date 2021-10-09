import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";


const appReducer = combineReducers({
  sampleReducer: sampleReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
