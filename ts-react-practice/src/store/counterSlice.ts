import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";


export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1; 
    },
    decrement(state) {
      state.value -= 1;
    },
  
    incrementBy(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = initialState.value;
    },
  },
});

export const { increment, decrement, incrementBy, reset } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
