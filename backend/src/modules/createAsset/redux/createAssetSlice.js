import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../../shared/utils/api";
import { setLoading } from "../../../shared/components/loader/redux/loaderSlice";
import { setError } from "../../../shared/components/errorDialog/redux/errorSlice";

const initialState = {
  portfolioList: [],
  groupList: [],
  technologyList: [],
  sectorList: [],
  businessUnitList: [],
  assetTypeList: [],
};

export const getAssetPrePopulatedListAsync = createAsyncThunk(
  "createAsset/getPrePopulatedList",
  async (paramData, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      // call All Api parallel, no need to wait
      const portfolioPromise = Api.get("/api/portfolios?page=1&pageSize=5");
      const groupPromise = Api.get("/api/groups?page=1&pageSize=5");
      const technologyPromise = Api.get("/api/technologies?page=1&pageSize=5");
      const sectorPromise = Api.get("/api/sectors?page=1&pageSize=5");
      const businessPromise = Api.get(
        "/api/business-functions?page=1&pageSize=5"
      );
      const assetTypePromise = Api.get("/api/asset-types?page=1&pageSize=5");

      // Wait for all promises to resolve in parallel
      const [
        portfolioRes,
        groupRes,
        technologyRes,
        sectorRes,
        businessRes,
        assetTypeRes,
      ] = await Promise.all([
        portfolioPromise,
        groupPromise,
        technologyPromise,
        sectorPromise,
        businessPromise,
        assetTypePromise,
      ]);

      // Combine or process data from each response
      const resultData = {
        portfolios: adjustListData(portfolioRes.data.data),
        groups: adjustListData(groupRes.data.data),
        technologies: adjustListData(technologyRes.data.data),
        sectors: adjustListData(sectorRes.data.data),
        businessUnits: adjustListData(businessRes.data.data),
        assetTypes: adjustListData(assetTypeRes.data.data),
      };
      thunkAPI.dispatch(updateAssetDropDownList(resultData));
      return resultData;
    } catch (error) {
      thunkAPI.dispatch(setError(error));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

const adjustListData = (arr) => {
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

export const createAssetSlice = createSlice({
  name: "createAsset",
  initialState,
  reducers: {
    updateAssetDropDownList: (state, action) => {
      state.portfolioList = action.payload.portfolios;
      state.groupList = action.payload.groups;
      state.technologyList = action.payload.technologies;
      state.sectorList = action.payload.sectors;
      state.businessUnitList = action.payload.businessUnits;
      state.assetTypeList = action.payload.assetTypes;
    },
    resetCreateAsset: (state) => ({
      ...initialState,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { updateAssetDropDownList, resetCreateAsset } =
  createAssetSlice.actions;

export default createAssetSlice.reducer;
