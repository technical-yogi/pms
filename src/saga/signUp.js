import { put } from "@redux-saga/core/effects";
import { signUpSuccess, signUpError } from "../actions/index";
//import { profileData } from "../../utils/profileData";
import axios from 'axios';

export function* signUp(action) {
  try {
    // let response = await axios.get(`https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${role}`)
    // if (response) {
console.log("asdfgh",":: response")
      // yield put(signUpSuccess({ response: profileData }));
    // } else {
      // yield put(signUpError({ error: "Data not fetched" }));
    // }
  } catch (error) {
    // yield put(signUpError({ error: "Data not fetched" }));
  }
}
export default signUp;