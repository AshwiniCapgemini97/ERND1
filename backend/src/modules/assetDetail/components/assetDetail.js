import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Button,
  Icon,
  Header,
  Tab,
  TabPane,
  Grid,
  Segment,
  Label,
  List,
  ListItem,
} from "semantic-ui-react";
import SubHeader from "./subHeader";
import Accordions from "./accordions";
import { requiredValidation } from "../../../shared/utils/validation";
import { resetAssetDetail } from "../redux/assetDetailSlice";
import "./css/assetDetail.scss";

export default function AssetDetail() {
  const dispatch = useDispatch();
  const { assetId } = useParams();

  //const assetDetailReducer = useSelector((state) => state.assetDetailReducer);

  const [formData, setFormData] = useState({ technology: "", sector: "" });
  const [error, setError] = useState({});

  useEffect(() => {
    // on component Load get the pre populated list (technology & sector)
    //dispatch(getTechnologySectorListAsync());
    return () => {
      // on component unload clear the assetReport reducer store
      dispatch(resetAssetDetail());
    };
  }, []);

  const handleValidation = (name, value) => {
    let errorMsg = "";
    switch (
      name
      // case "technology":
      //   errorMsg = requiredValidation(name, value);
      //   break;
    ) {
    }
    return errorMsg;
  };

  const handleChange = (name, value) => {
    const errorMsg = handleValidation(name, value);

    // handle error
    if (errorMsg) {
      setError({ ...error, [name]: errorMsg });
    } else {
      const copyError = { ...error };
      delete copyError[name];
      setError({ ...copyError });
    }

    // save data into local state
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isFormValid = (formData) => {
    let isValid = true;
    const errObj = {};
    for (let name in formData) {
      const err = handleValidation(name, formData[name]);
      if (err) errObj[name] = err;
    }

    if (Object.keys(errObj).length >= 1) {
      setError(errObj);
      isValid = false;
    }
    return isValid;
  };

  /* always create the function because sometime state contains extra data that 
     we don't want to send to api call 
  */
  const getParam = (formData) => {
    return {
      technology: formData.technology,
      sector: formData.sector,
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = isFormValid(formData);
    if (!isValid) {
      return;
    }
    const param = getParam(formData);
    //dispatch(generateAssetReportAsync(param));
  };

  const panes = [
    {
      menuItem: "Description",
      render: () => <TabPane attached={false}>Tab 1 Content</TabPane>,
    },
    {
      menuItem: "Customer Issues",
      render: () => <TabPane attached={false}>Tab 2 Content</TabPane>,
    },
    {
      menuItem: "Solution",
      render: () => <TabPane attached={false}>Tab 3 Content</TabPane>,
    },
    {
      menuItem: "Benifits",
      render: () => <TabPane attached={false}>Tab 4 Content</TabPane>,
    },
  ];

  return (
    <div className="assetDetail-wrapper">
      <SubHeader />
      <div className="main-container">
        <Segment
          style={{
            marginLeft: "26px",
            marginRight: "26px",
            backgroundColor: "white",
            boxShadow: "none",
            border: "none",
          }}
        >
          <Grid stackable>
            <Grid.Column width={10}>
              <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
              <Header as="h3" block>
                GENIE Recommends
              </Header>
              <Accordions />
            </Grid.Column>
            <Grid.Column width={6}>
              <div className="businessDetail">
                <Header size="medium">
                  <Icon name="pdf file outline" />
                  Business Details
                </Header>
                <Segment>1</Segment>
              </div>

              <div className="tagsWrapper">
                <Header as="h4" attached="top">
                  <Icon name="tags" />
                  Tags
                </Header>
                <Segment attached>
                  <Label color="red">Generative AI</Label>
                  <Label color="red">Generative AI</Label>
                  <Label color="red">Generative AI</Label>
                  <Label color="red">Generative AI</Label>
                </Segment>
              </div>

              <Segment placeholder>
                <Header icon>
                  <Icon name="pdf file outline" />
                </Header>
                <Button primary>Download</Button>
              </Segment>

              <div className="linksWrapper">
                <Header as="h4" attached="top">
                  <Icon name="linkify" />
                  Links
                </Header>
                <Segment attached>
                  <List>
                    <ListItem href="#" target="_blank">
                      <Icon name="linkify" />
                      &nbsp; http://link1.com/abc
                    </ListItem>
                    <ListItem href="#" target="_blank">
                      <Icon name="linkify" />
                      &nbsp; http://link1.com/abc
                    </ListItem>
                  </List>
                </Segment>
              </div>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    </div>
  );
}
