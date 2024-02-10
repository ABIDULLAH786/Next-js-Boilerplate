import { combineReducers } from "redux";
import authReducer from "./slice/auth/auth-slice";
import testReducer from "./slice/test/test-slice";

const rootReducer = combineReducers({
  auth: authReducer,
  test: testReducer,
});

export default rootReducer;
