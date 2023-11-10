import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    // Add your reducer functions here if needed
  },
});

export default userSlice.reducer;
