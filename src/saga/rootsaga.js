import * as action from "../constants";
import { fork, all, takeLatest } from "redux-saga/effects";
import {signUp} from "./signUp";

function* signUpBind() {
  yield takeLatest(action.SIGN_UP_REQUEST, signUp);
}

export default function* rootSaga() {
  yield all([fork(signUpBind)]);
}

