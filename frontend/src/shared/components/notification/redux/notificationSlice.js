import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  type: "info", // Can be 'info', 'success', 'warning', or 'error' for Semantic UI classes
  open: false,
};

const notificationSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    showNotification(state, action) {
      state.message = action.payload.message;
      state.type = action.payload.type || "info"; // Default to info if not provided
      state.open = true;
    },
    hideNotification(state) {
      state.message = "";
      state.type = "info";
      state.open = false;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
