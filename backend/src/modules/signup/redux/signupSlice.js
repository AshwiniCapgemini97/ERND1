import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../../shared/utils/api";
import { setLoading } from "../../../shared/components/loader/redux/loaderSlice";
import { setError } from "../../../shared/components/errorDialog/redux/errorSlice";

const initialState = {
  isSuccessfull: false,
};

export const signupAsync = createAsyncThunk(
  "auth/signup",
  async (signupFormData, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const response = await Api.post("/api/users/signup", signupFormData);
      const resultData = response.data;
      thunkAPI.dispatch(signupSuccess(true));
      return resultData;
    } catch (error) {
      thunkAPI.dispatch(setError(error));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const signupSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupSuccess: (state) => {
      state.isSuccessfull = true;
    },
    resetSignup: (state) => ({
      ...initialState,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { signupSuccess, resetSignup } = signupSlice.actions;

export default signupSlice.reducer;
