import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  MenuMenu,
  MenuItem,
  Input,
  Menu,
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  Dropdown,
} from "semantic-ui-react";
import { pageURL } from "../../shared/constants/constant";
import cg_logo from "../../assets/images/cg_logo.png";
import logo_beta from "../../assets/images/logo_beta.png";
import uploadAssetPpt from "../../assets/ppt/How to upload Asset into Innovation Theater.pptx";
import editAssetPpt from "../../assets/ppt/Innovation Theater Upload-Edit Assets Process-v2.pptx";
import reviewAssetPpt from "../../assets/ppt/Innovation Theater Board Aseet Reviewing Process-v1.pptx";
import { resetLogin } from "../../modules/login/redux/loginSlice";
import "./topNav.scss";

export default function TopNav() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const userName = useSelector((state) => state.authReducer.name);

  const handleMenuClick = (menu) => {
    switch (menu) {
      case "home":
        navigate(pageURL.home);
        break;
      case "about":
        navigate(pageURL.about);
        break;
      case "dashboard":
        navigate(pageURL.dashboard);
        break;
      case "login":
        navigate(pageURL.login);
        break;
      case "signup":
        navigate(pageURL.signup);
        break;
      case "createAsset":
        navigate(pageURL.createAsset);
        break;
      case "bulkUpload":
        navigate(pageURL.bulkUpload);
        break;
      case "assetReport":
        navigate(pageURL.assetReport);
        break;
      case "logout":
        dispatch(resetLogin());
        navigate(pageURL.home);
        break;
    }
  };

  const handleDownload = (file) => {
    let downnloadedFile = "";
    switch (file) {
      case "uploadAsset":
        downnloadedFile = uploadAssetPpt;
        break;
      case "editAsset":
        downnloadedFile = editAssetPpt;
        break;
      case "reviewAsset":
        downnloadedFile = reviewAssetPpt;
        break;
    }

    // using Java Script method to get PDF file
    fetch(downnloadedFile).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = downnloadedFile;
        alink.click();
      });
    });
  };

  return (
    <Container className="topNavWrapper">
      <Menu secondary stackable>
        <Link to="/">
          <img src={cg_logo} className="cg_logo" />
        </Link>

        <MenuItem className="searchTextbox">
          <Input icon="search" placeholder="Search Asset here..." />
        </MenuItem>
        <img className="logo_beta" src={logo_beta} />

        <MenuItem
          name="home"
          active={location.pathname === pageURL.home}
          onClick={() => handleMenuClick("home")}
          className="homeMenuLink"
        />
        <MenuItem
          name="About"
          active={location.pathname === pageURL.about}
          onClick={() => handleMenuClick("about")}
        />
        <Dropdown text="Help" className="link item">
          <DropdownMenu>
            <DropdownItem
              onClick={() => handleDownload("uploadAsset")}
              text="How To Upload Asset"
            />
            <DropdownItem
              onClick={() => handleDownload("editAsset")}
              text="How To Edit/Modify Asset"
            />
            <DropdownItem
              onClick={() => handleDownload("reviewAsset")}
              text="Asset Review (How it Works)"
            />
          </DropdownMenu>
        </Dropdown>

        <MenuMenu position="right">
          <div className="profileMenu">
            <Dropdown
              icon="user circle"
              simple
              closeOnBlur
              floating
              button
              className="icon myProfile"
            >
              <DropdownMenu>
                {!isAuthenticated && (
                  <>
                    <DropdownItem
                      icon="user"
                      text="Login"
                      active={location.pathname === pageURL.login}
                      onClick={() => handleMenuClick("login")}
                    />
                    <DropdownItem
                      icon="add user"
                      text="Signup"
                      active={location.pathname === pageURL.signup}
                      onClick={() => handleMenuClick("signup")}
                    />
                  </>
                )}
                {isAuthenticated && (
                  <>
                    <DropdownHeader>Hi {userName}</DropdownHeader>
                    <DropdownDivider />
                    <DropdownItem icon="user" text="My Profile" />
                    <DropdownItem
                      icon="dashboard"
                      text="Dashboard"
                      active={location.pathname === pageURL.dashboard}
                      onClick={() => handleMenuClick("dashboard")}
                    />
                    <DropdownItem
                      icon="eye"
                      text="View Assets"
                      active={location.pathname === pageURL.viewAsset}
                      onClick={() => handleMenuClick("viewAsset")}
                    />
                    <DropdownItem
                      icon="tasks"
                      text="Create Assets"
                      active={location.pathname === pageURL.createAsset}
                      onClick={() => handleMenuClick("createAsset")}
                    />
                    <DropdownItem
                      icon="upload"
                      text="Bulk Upload"
                      active={location.pathname === pageURL.bulkUpload}
                      onClick={() => handleMenuClick("bulkUpload")}
                    />
                    <DropdownItem
                      icon="file text"
                      text="Assets Report"
                      active={location.pathname === pageURL.assetReport}
                      onClick={() => handleMenuClick("assetReport")}
                    />
                    <DropdownItem
                      icon="log out"
                      text="Logout"
                      onClick={() => handleMenuClick("logout")}
                    />
                  </>
                )}
              </DropdownMenu>
            </Dropdown>
          </div>
        </MenuMenu>
      </Menu>
    </Container>
  );
}
