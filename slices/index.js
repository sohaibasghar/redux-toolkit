import { combineReducers } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import UserSlice from "./UserSlice";
const reducer = combineReducers({
  counter: CounterSlice,
  users: UserSlice
});

export default reducer;
