import { combineReducers } from "redux";

import userData from "./username";

import userPwd from "./password";
import userRule from "./rule";
import signUp from "./signUp"
import logIn from "./logIn"

const rootReducer = combineReducers({
   username:userData,
   password:userPwd,
   rule:userRule,
   api_state:signUp, 
   loginState:logIn

});

export default rootReducer;

