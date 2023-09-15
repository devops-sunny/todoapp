import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.todo = [...state.todo, newTodo];
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
