import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import PublicRoute from "./publicRoute";
import ProtectedRoute from "./protectedRoute";
import AdminRoute from "./adminRoute";
import Loader from "../shared/components/loader/loader";
import ErrorDialog from "../shared/components/errorDialog/errorDialog";
import Home from "../modules/Home/components/home";
import AboutUs from "../modules/aboutUs/components/aboutUs";
import Login from "../modules/login/components/login";
import Signup from "../modules/signup/components/signup";
import Dashboard from "../modules/dashboard/components/dashboard";
import CreateAsset from "../modules/createAsset/components/createAsset";
import BulkUpload from "../modules/bulkUpload/components/bulkUpload";
import AssetReport from "../modules/assetReport/components/assetReport";
import AssetDetail from "../modules/assetDetail/components/assetDetail";
import { pageURL } from "../shared/constants/constant";

import UserList from "../modules/admin/user/components/userList";
import AddEditUser from "../modules/admin/user/components/addEditUser";

import GroupList from "../modules/admin/group/components/groupList";
import AddEditGroup from "../modules/admin/group/components/addEditGroup";

import PortfolioList from "../modules/admin/portfolio/components/portfolioList";
import AddEditPortfolio from "../modules/admin/portfolio/components/addEditPortfolio";

import SectorList from "../modules/admin/sector/components/sectorList";
import AddEditSector from "../modules/admin/sector/components/addEditSector";

import TechnologyList from "../modules/admin/technology/components/technologyList";
import AddEditTechnology from "../modules/admin/technology/components/addEditTechnology";

import BusinessUnitList from "../modules/admin/businessUnit/components/businessUnitList";
import AddEditBusinessUnit from "../modules/admin/businessUnit/components/addEditBusinessUnit";

import AssetTypeList from "../modules/admin/assetType/components/assetTypeList";
import AddEditAssetType from "../modules/admin/assetType/components/addEditAssetType";

import AssetGroupList from "../modules/admin/assetGroup/components/assetGroupList";
import AddEditAssetGroup from "../modules/admin/assetGroup/components/addEditAssetGroup";

import AddEditAsset from "../modules/admin/asset/components/addEditAsset";
import AssetList from "../modules/admin/asset/components/assetList";

export default function RoutesMain() {
  const routes = [
    {
      path: pageURL.home,
      exact: true,
      element: (
        <PublicRoute>
          <Home />
        </PublicRoute>
      ),
    },
    {
      path: pageURL.about,
      exact: true,
      element: (
        <PublicRoute>
          <AboutUs />
        </PublicRoute>
      ),
    },
    {
      path: pageURL.assetDetail,
      exact: true,
      element: (
        <PublicRoute>
          <AssetDetail />
        </PublicRoute>
      ),
    },
    {
      path: pageURL.login,
      exact: true,
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
    {
      path: pageURL.signup,
      exact: true,
      element: (
        <PublicRoute>
          <Signup />
        </PublicRoute>
      ),
    },
    {
      path: pageURL.dashboard,
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: pageURL.createAsset,
      element: (
        <ProtectedRoute>
          <CreateAsset />
        </ProtectedRoute>
      ),
    },
    {
      path: pageURL.bulkUpload,
      element: (
        <ProtectedRoute>
          <BulkUpload />
        </ProtectedRoute>
      ),
    },
    {
      path: pageURL.assetReport,
      element: (
        <ProtectedRoute>
          <AssetReport />
        </ProtectedRoute>
      ),
    },
  ];

  const adminRoutes = [
    {
      path: pageURL.userList,
      exact: true,
      element: (
        <AdminRoute>
          <UserList />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.addEditUser,
      exact: true,
      element: (
        <AdminRoute>
          <AddEditUser />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.groupList,
      exact: true,
      element: (
        <AdminRoute>
          <GroupList />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.addEditGroup,
      exact: true,
      element: (
        <AdminRoute>
          <AddEditGroup />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.portfolioList,
      exact: true,
      element: (
        <AdminRoute>
          <PortfolioList />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.addEditPortfolio,
      exact: true,
      element: (
        <AdminRoute>
          <AddEditPortfolio />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.sectorList,
      exact: true,
      element: (
        <AdminRoute>
          <SectorList />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.addEditSector,
      exact: true,
      element: (
        <AdminRoute>
          <AddEditSector />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.technologyList,
      exact: true,
      element: (
        <AdminRoute>
          <TechnologyList />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.addEditTechnology,
      exact: true,
      element: (
        <AdminRoute>
          <AddEditTechnology />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.businessUnitList,
      exact: true,
      element: (
        <AdminRoute>
          <BusinessUnitList />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.addEditBusinessUnit,
      exact: true,
      element: (
        <AdminRoute>
          <AddEditBusinessUnit />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.assetTypeList,
      exact: true,
      element: (
        <AdminRoute>
          <AssetTypeList />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.addEditAssetType,
      exact: true,
      element: (
        <AdminRoute>
          <AddEditAssetType />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.assetGroupList,
      exact: true,
      element: (
        <AdminRoute>
          <AssetGroupList />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.addEditAssetGroup,
      exact: true,
      element: (
        <AdminRoute>
          <AddEditAssetGroup />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.assetList,
      exact: true,
      element: (
        <AdminRoute>
          <AssetList />
        </AdminRoute>
      ),
    },
    {
      path: pageURL.addEditAsset,
      exact: true,
      element: (
        <AdminRoute>
          <AddEditAsset />
        </AdminRoute>
      ),
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} {...route}></Route>
        ))}

        {adminRoutes.map((route, i) => (
          <Route key={i} {...route}></Route>
        ))}
      </Routes>
      <Loader />
      <ErrorDialog />
    </BrowserRouter>
  );
}
