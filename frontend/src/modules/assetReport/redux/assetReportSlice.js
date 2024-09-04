import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../../shared/utils/api";
import { setLoading } from "../../../shared/components/loader/redux/loaderSlice";
import { setError } from "../../../shared/components/errorDialog/redux/errorSlice";

const initialState = {
  technologyList: [],
  sectorList: [],
  assetReportSuccess: false,
};

export const getTechnologySectorListAsync = createAsyncThunk(
  "assetReport/getTechnologySectorList",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      // call All Api parallel, no need to wait
      const technologyPromise = Api.get("/api/technologies?page=1&pageSize=5");
      const sectorPromise = Api.get("/api/sectors?page=1&pageSize=5");

      // Wait for all promises to resolve in parallel
      const [technologyRes, sectorRes] = await Promise.all([
        technologyPromise,
        sectorPromise,
      ]);

      // Combine or process data from each response
      const resultData = {
        technologies: generateDesiredFormat(technologyRes.data.data),
        sectors: generateDesiredFormat(sectorRes.data.data),
      };
      thunkAPI.dispatch(updateTechnologySectorList(resultData));
      return resultData;
    } catch (error) {
      thunkAPI.dispatch(setError(error));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const generateAssetReportAsync = createAsyncThunk(
  "assetReportGenerate/postAPI",
  async (paramData, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      // generate AssetReport APi is not implemented yet
      //const response = await Api.post("/api/auth/login", paramData);
      //const resultData = response.data;
      thunkAPI.dispatch(assetReportSuccess());
      //return resultData;
    } catch (error) {
      thunkAPI.dispatch(setError(error));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

const generateDesiredFormat = (arr) => {
  const resultArr = [];
  for (let item of arr) {
    resultArr.push({
      key: item.id,
      text: item.title,
      value: item.id,
      status: item.status,
    });
  }
  return resultArr;
};

export const assetReportSlice = createSlice({
  name: "assetReport",
  initialState,
  reducers: {
    updateTechnologySectorList: (state, action) => {
      state.technologyList = action.payload.technologies;
      state.sectorList = action.payload.sectors;
    },
    assetReportSuccess: (state) => {
      state.assetReportSuccess = true;
    },
    resetAssetReport: (state) => ({
      ...initialState,
    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  updateTechnologySectorList,
  assetReportSuccess,
  resetAssetReport,
} = assetReportSlice.actions;

export default assetReportSlice.reducer;
