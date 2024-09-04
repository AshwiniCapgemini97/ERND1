import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "../shared/components/loader/redux/loaderSlice";
import errorSlice from "../shared/components/errorDialog/redux/errorSlice";
import notificationSlice from "../shared/components/notification/redux/notificationSlice";
import loginSlice from "../modules/login/redux/loginSlice";
import signupSlice from "../modules/signup/redux/signupSlice";
import dashboardSlice from "../modules/dashboard/redux/dashboardSlice";
import createAssetSlice from "../modules/createAsset/redux/createAssetSlice";
import bulkUploadSlice from "../modules/bulkUpload/redux/bulkUploadSlice";
import assetReportSlice from "../modules/assetReport/redux/assetReportSlice";

// Admin Slices
import userSlice from "../modules/admin/user/redux/userSlice";

export const store = configureStore({
  reducer: {
    loaderReducer: loaderSlice,
    errorReducer: errorSlice,
    notificationReducer: notificationSlice,
    authReducer: loginSlice,
    signupReducer: signupSlice,
    dashboardReducer: dashboardSlice,
    createAssetReducer: createAssetSlice,
    bulkUploadReducer: bulkUploadSlice,
    assetReportReducer: assetReportSlice,

    adminUserReducer: userSlice,
  },
});
