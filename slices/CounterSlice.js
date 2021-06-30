import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    count: 0
  },
  reducers: {
    increament: (state) => ({ ...state, count: state.count + 1 }),
    decreament: (state) => ({ ...state, count: state.count - 1 }),
    increamentByNumber: (state, action) => ({
      ...state,
      count: state.count + action.payload
    })
  }
});

export const {
  increament,
  decreament,
  increamentByNumber
} = CounterSlice.actions;
export default CounterSlice.reducer;
