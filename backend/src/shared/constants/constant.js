export const apiBaseURL = "http://127.0.0.1:5001/";

export const pageURL = {
  home: "/",
  about: "/about",
  login: "/login",
  signup: "/signup",
  dashboard: "/dashboard",
  createAsset: "/createAsset",
  bulkUpload: "/bulkUpload",
  assetReport: "/assetReport",
  assetDetail: "/assetDetail/:assetId",
  bulkUpload: "/bulkUpload",

  //  Admin Routes
  userList: "/admin/userList",
  addEditUser: "/admin/user",
  groupList: "/admin/groupList",
  addEditGroup: "/admin/group",
  portfolioList: "/admin/portfolioList",
  addEditPortfolio: "/admin/portfolio",
  sectorList: "/admin/sectorList",
  addEditSector: "/admin/sector",
  technologyList: "/admin/technologyList",
  addEditTechnology: "/admin/technology",
  businessUnitList: "/admin/businessUnitList",
  addEditBusinessUnit: "/admin/businessUnit",
  assetTypeList: "/admin/assetTypeList",
  addEditAssetType: "/admin/assetType",
  assetGroupList: "/admin/assetGroupList",
  addEditAssetGroup: "/admin/assetGroup",
  assetList: "/admin/assetList",
  addEditAsset: "/admin/asset"
};

export const activeInactiveList = [
  { text: "INACTIVE", value: "INACTIVE" },
  { text: "ACTIVE", value: "ACTIVE" },
];
