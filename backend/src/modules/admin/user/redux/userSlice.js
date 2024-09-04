import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../../../shared/utils/api";
import { setLoading } from "../../../../shared/components/loader/redux/loaderSlice";
import { setError } from "../../../../shared/components/errorDialog/redux/errorSlice";
import { showNotification } from "../../../../shared/components/notification/redux/notificationSlice";

const initialState = {
  status: false, // always take status key in reducer
  userListPage: {
    userList: [],
    currentPage: 1,
    recordsPerPage: 5,
    totalRecords: 0,
  },
  userPage: {},
};

export const getUserListAsync = createAsyncThunk(
  "user/getUserList",
  async (_, thunkAPI) => {
    // directlty access state inside async thunk
    const state = thunkAPI.getState().adminUserReducer.userListPage;
    thunkAPI.dispatch(setLoading(true));
    try {
      const response = await Api.get(
        `/api/users/getallUsers?page=${state.currentPage}&pageSize=${state.recordsPerPage}`
      );
      const resultData = response.data;
      thunkAPI.dispatch(getUserListSuccess(resultData));
      return resultData;
    } catch (error) {
      thunkAPI.dispatch(setError(error));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const getUserByIdAsync = createAsyncThunk(
  "getUserById/getDetaild",
  async (userId, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const response = await Api.get(`/api/users/${userId}`);
      const resultData = response.data;
      thunkAPI.dispatch(setUserPageData(resultData));
      return resultData;
    } catch (error) {
      thunkAPI.dispatch(setError(error));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const updateUserAsync = createAsyncThunk(
  "user/update",
  async (paramData, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const response = await Api.patch(`/api/users/${userId}`, paramData);
      const resultData = response.data;
      thunkAPI.dispatch(setStatus(true));
      // global notification
      thunkAPI.dispatch(
        showNotification({
          message: "User updated successfully",
          type: "success",
        })
      );
      return resultData;
    } catch (error) {
      thunkAPI.dispatch(setError(error));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const deleteUserAsync = createAsyncThunk(
  "user/delete",
  async (userId, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const response = await Api.delete(`/api/users/${userId}`);
      const resultData = response.data;
      thunkAPI.dispatch(setStatus(true));
      // global notification
      thunkAPI.dispatch(
        showNotification({
          message: "User deleted successfully",
          type: "success",
        })
      );
      return resultData;
    } catch (error) {
      thunkAPI.dispatch(setError(error));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserListSuccess: (state, action) => {
      state.userListPage.userList = action.payload.data;
      state.userListPage.totalRecords = action.payload.total;
    },
    setCurrentPage: (state, action) => {
      state.userListPage.currentPage = action.payload;
    },
    setRecordsPerPage: (state, action) => {
      state.userListPage.recordsPerPage = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setUserPageData: (state, action) => {
      state.userPage = action.payload;
    },
    resetUserListPage: (state) => {
      state.userListPage = initialState.userListPage;
      state.status = false;
    },
    resetUserPage: (state) => {
      state.userPage = initialState.userPage;
      state.status = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getUserListSuccess,
  setCurrentPage,
  setRecordsPerPage,
  setStatus,
  setUserPageData,
  resetUserListPage,
  resetUserPage,
} = userSlice.actions;

export default userSlice.reducer;
