import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../../shared/utils/api";
import { setLoading } from "../../../shared/components/loader/redux/loaderSlice";
import { setError } from "../../../shared/components/errorDialog/redux/errorSlice";

const initialState = {
  bulkUploadSuccess: false,
};

export const bulkUploadAsync = createAsyncThunk(
  "bulkUpload/postAPI",
  async (paramData, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      // bulkAPI not implemented yet
      //const response = await Api.post("/api/auth/login", paramData);
      //const resultData = response.data;
      thunkAPI.dispatch(bulkUploadSuccess());
      //return resultData;
    } catch (error) {
      thunkAPI.dispatch(setError(error));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const bulkUploadSlice = createSlice({
  name: "bulkUpload",
  initialState,
  reducers: {
    bulkUploadSuccess: (state) => {
      state.bulkUploadSuccess = true;
    },
    resetBulkUpload: (state) => ({
      ...initialState,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { bulkUploadSuccess, resetBulkUpload } = bulkUploadSlice.actions;

export default bulkUploadSlice.reducer;
