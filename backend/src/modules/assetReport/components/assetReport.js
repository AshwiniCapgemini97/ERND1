import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  Grid,
  Icon,
  Message,
  Card,
  CardContent,
} from "semantic-ui-react";
import SelectBox from "../../../shared/components/selectBox/selectBox";
import HeaderStrip from "../../../shared/components/headerStrip/headerStrip";
import { requiredValidation } from "../../../shared/utils/validation";
import {
  getTechnologySectorListAsync,
  generateAssetReportAsync,
  resetAssetReport,
} from "../redux/assetReportSlice";
import "./css/assetReport.scss";

export default function AssetReport() {
  const dispatch = useDispatch();

  const assetReportReducer = useSelector((state) => state.assetReportReducer);

  const [formData, setFormData] = useState({ technology: "", sector: "" });
  const [error, setError] = useState({});

  useEffect(() => {
    // on component Load get the pre populated list (technology & sector)
    dispatch(getTechnologySectorListAsync());
    return () => {
      // on component unload clear the assetReport reducer store
      dispatch(resetAssetReport());
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
    dispatch(generateAssetReportAsync(param));
  };

  return (
    <div className="assetReport-wrapper">
      <HeaderStrip pageName="Generate Asset Report" />
      <div className="main-container">
        <Form onSubmit={handleSubmit}>
          <Grid>
            <Grid.Column
              computer={16}
              mobile={16}
              tablet={16}
              style={{ paddingLeft: "26px", paddingRight: "26px" }}
            >
              <Card fluid>
                <CardContent>
                  <Grid>
                    <Grid.Column computer={16} mobile={16} tablet={16}>
                      <SelectBox
                        name="technology"
                        label="Technology"
                        value={formData.technology}
                        placeholder="Choose here"
                        options={assetReportReducer.technologyList}
                        onChange={handleChange}
                      />
                    </Grid.Column>
                    <Grid.Column computer={16} mobile={16} tablet={16}>
                      <SelectBox
                        name="sector"
                        label="Sector"
                        value={formData.sector}
                        placeholder="Choose here"
                        options={assetReportReducer.sectorList}
                        onChange={handleChange}
                      />
                    </Grid.Column>
                  </Grid>
                </CardContent>
              </Card>
              <Button className="commonGlobalBtn">
                Submit &nbsp; &nbsp;
                <Icon name="paper plane" />
              </Button>
            </Grid.Column>
          </Grid>
        </Form>
        {assetReportReducer.assetReportSuccess && (
          <Message
            icon="check circle outline"
            content="Asset Report is generated successful"
            className="stickyNotification"
          />
        )}
      </div>
    </div>
  );
}
