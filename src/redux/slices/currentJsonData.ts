import { createSlice } from "@reduxjs/toolkit";

interface jsonDataState {
  dataArray: any[] | null;
}

const initialState: jsonDataState = {
  dataArray: null,
};

const currentJsonDataSlice = createSlice({
  name: "currentJsonData",
  initialState,
  reducers: {
    setCurrentData: (state, action) => {
      state.dataArray = action.payload;
    },
  },
});

export const { setCurrentData } = currentJsonDataSlice.actions;
export default currentJsonDataSlice.reducer;
