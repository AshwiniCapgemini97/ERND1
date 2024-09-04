import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../../shared/utils/api";
import { setLoading } from "../../../shared/components/loader/redux/loaderSlice";
import { setError } from "../../../shared/components/errorDialog/redux/errorSlice";

const initialState = {
  employeeList: [],
  available: 0,
  hardBlock: 0,
  softBlock: 0,
};

// const apiService = Api.getInstance(store);
export const getBenchEmployeeAsync = createAsyncThunk(
  "dashboard/getBenchEmployeeList",
  async (data, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const response = await Api.fetch("/data");
      const resultData = response.data;

      const finalRespObj = {
        available: 0,
        hardBlock: 0,
        softBlock: 0,
        result: resultData,
      };

      resultData.forEach((data) => {
        if (data.blockStatus === "Available") {
          finalRespObj.available += 1;
        } else if (data.blockStatus === "Hard Block") {
          finalRespObj.hardBlock += 1;
        } else if (data.blockStatus === "Soft Block") {
          finalRespObj.softBlock += 1;
        }
      });
      // save data into reducer
      thunkAPI.dispatch(onSuccess(finalRespObj));
      return finalRespObj;
    } catch (error) {
      thunkAPI.dispatch(setError(error));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    onSuccess: (state, action) => {
      state.employeeList = action.payload.result;
      state.available = action.payload.available;
      state.hardBlock = action.payload.hardBlock;
      state.softBlock = action.payload.softBlock;
    },
    resetDashboard: (state) => ({
      ...initialState,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { onSuccess, resetDashboard } = dashboardSlice.actions;

export default dashboardSlice.reducer;
