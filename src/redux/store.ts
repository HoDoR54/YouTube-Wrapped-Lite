import { configureStore } from "@reduxjs/toolkit";
import currentFileReducer from "./slices/currentFile";
import currentJsonDataReducer from "./slices/currentJsonData";

export const store = configureStore({
  reducer: {
    currentFile: currentFileReducer,
    currentJsonData: currentJsonDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
