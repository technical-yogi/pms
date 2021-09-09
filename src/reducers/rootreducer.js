import { combineReducers } from "redux";

import userData from "./username";

import userPwd from "./password";
import userRule from "./rule";

const rootReducer = combineReducers({
   username:userData,
   password:userPwd,
   rule:userRule
});

export default rootReducer;

