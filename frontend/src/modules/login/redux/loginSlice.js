import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../../shared/utils/api";
import { setLoading } from "../../../shared/components/loader/redux/loaderSlice";
import { setError } from "../../../shared/components/errorDialog/redux/errorSlice";

const initialState = {
  name: null,
  email: null,
  role: null,
  accessToken: null,
  isAuthenticated: false,
};

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const response = await Api.post("/api/auth/login", credentials);
      const resultData = response.data;
      thunkAPI.dispatch(loginSuccess(resultData));
      return resultData;
    } catch (error) {
      thunkAPI.dispatch(setError(error));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.accessToken = action.payload.access_token;
      state.isAuthenticated = true;
    },
    resetLogin: (state) => ({
      ...initialState,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { loginSuccess, resetLogin } = loginSlice.actions;

export default loginSlice.reducer;
