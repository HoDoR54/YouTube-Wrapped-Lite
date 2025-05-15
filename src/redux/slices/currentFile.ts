import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface currentFileState {
  file: File | null;
}

const initialState: currentFileState = {
  file: null,
};

const currentFileSlice = createSlice({
  name: "currentFile",
  initialState,
  reducers: {
    setCurrentFile: (state, action: PayloadAction<File | null>) => {
      state.file = action.payload;
    },
  },
});

export const { setCurrentFile } = currentFileSlice.actions;
export default currentFileSlice.reducer;
