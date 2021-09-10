import * as action from "../constants";
import { fork, all, takeLatest } from "redux-saga/effects";
import {signUp} from "./signUp";
import {logIn} from "./logIn";

function* signUpBind() {
  yield takeLatest(action.SIGN_UP_REQUEST, signUp);
}
function* loginBind() {
  yield takeLatest(action.LOG_IN_REQUEST,logIn);
}

export default function* rootSaga() {
  yield all([fork(signUpBind),fork(loginBind)]);
}

