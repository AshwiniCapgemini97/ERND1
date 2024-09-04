import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../../shared/utils/api";
import { setLoading } from "../../../shared/components/loader/redux/loaderSlice";
import { setError } from "../../../shared/components/errorDialog/redux/errorSlice";

const initialState = {
  // technologyList: [],
  // sectorList: [],
  assetDetailSuccess: false,
};

export const assetDetailSlice = createSlice({
  name: "assetDetail",
  initialState,
  reducers: {
    // updateTechnologySectorList: (state, action) => {
    //   state.technologyList = action.payload.technologies;
    //   state.sectorList = action.payload.sectors;
    // },
    assetDetailSuccess: (state) => {
      state.assetDetailSuccess = true;
    },
    resetAssetDetail: (state) => ({
      ...initialState,
    }),
  },
});

export const {
  //updateTechnologySectorList,
  assetDetailSuccess,
  resetAssetDetail,
} = assetDetailSlice.actions;

export default assetDetailSlice.reducer;
