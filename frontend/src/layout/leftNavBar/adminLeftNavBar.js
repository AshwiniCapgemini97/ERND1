import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import { pageURL } from "../../shared/constants/constant";

const LeftNavBar = () => {
  let navigate = useNavigate();

  const handleMenuClick = (menu) => {
    switch (menu) {
      case "user":
        navigate(pageURL.userList);
        break;
      case "group":
        navigate(pageURL.groupList);
        break;
      case "portfolio":
        navigate(pageURL.portfolioList);
        break;
      case "sector":
        navigate(pageURL.sectorList);
        break;
      case "technology":
        navigate(pageURL.technologyList);
        break;
      case "businessUnit":
        navigate(pageURL.businessUnitList);
        break;
      case "assetType":
        navigate(pageURL.assetTypeList);
        break;
      case "assetGroup":
        navigate(pageURL.assetGroupList);
        break;
        case "asset":
          navigate(pageURL.assetList);
        break;
    }
  };

  return (
    <Menu vertical>
      <Menu.Item
        active={
          location.pathname === pageURL.userList ||
          location.pathname === pageURL.addEditUser
        }
        onClick={() => handleMenuClick("user")}
      >
        <Icon name="user" />
        User
      </Menu.Item>
      <Menu.Item
        active={
          location.pathname === pageURL.groupList ||
          location.pathname === pageURL.addEditGroup
        }
        onClick={() => handleMenuClick("group")}
      >
        <Icon name="group" />
        Group
      </Menu.Item>
      <Menu.Item
        active={
          location.pathname === pageURL.portfolioList ||
          location.pathname === pageURL.addEditPortfolio
        }
        onClick={() => handleMenuClick("portfolio")}
      >
        <Icon name="help" />
        Portfolio
      </Menu.Item>
      <Menu.Item
        active={
          location.pathname === pageURL.sectorList ||
          location.pathname === pageURL.addEditSector
        }
        onClick={() => handleMenuClick("sector")}
      >
        <Icon name="industry" />
        Sector
      </Menu.Item>
      <Menu.Item
        active={
          location.pathname === pageURL.technologyList ||
          location.pathname === pageURL.addEditTechnology
        }
        onClick={() => handleMenuClick("technology")}
      >
        <Icon name="laptop" />
        Technology
      </Menu.Item>
      <Menu.Item
        active={
          location.pathname === pageURL.businessUnitList ||
          location.pathname === pageURL.addEditBusinessUnit
        }
        onClick={() => handleMenuClick("businessUnit")}
      >
        <Icon name="money" />
        Business Unit
      </Menu.Item>
      <Menu.Item
        active={
          location.pathname === pageURL.assetTypeList ||
          location.pathname === pageURL.addEditAssetType
        }
        onClick={() => handleMenuClick("assetType")}
      >
        <Icon name="cube" />
        Asset Type
      </Menu.Item>
      <Menu.Item
        active={
          location.pathname === pageURL.assetGroupList ||
          location.pathname === pageURL.addEditAssetGroup
        }
        onClick={() => handleMenuClick("assetGroup")}
      >
        <Icon name="group" />
        Asset Group
      </Menu.Item>
      <Menu.Item
        active={
          location.pathname === pageURL.assetList ||
          location.pathname === pageURL.addEditAsset
        }
        onClick={() => handleMenuClick("asset")}
      >
        <Icon name="home" />
        Asset
      </Menu.Item>
    </Menu>
  );
};

export default LeftNavBar;
