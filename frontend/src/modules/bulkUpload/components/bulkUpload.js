import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  Grid,
  Icon,
  BreadcrumbSection,
  BreadcrumbDivider,
  Breadcrumb,
  Message,
  Card,
  CardContent,
} from "semantic-ui-react";
import UploadButton from "../../../shared/components/uploadButton/uploadButton";
import HeaderStrip from "../../../shared/components/headerStrip/headerStrip";
import { requiredValidation } from "../../../shared/utils/validation";
import { bulkUploadAsync, resetBulkUpload } from "../redux/bulkUploadSlice";
import "./css/bulkUpload.scss";

export default function BulkUpload() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const isSuccess = useSelector(
    (state) => state.bulkUploadReducer.bulkUploadSuccess
  );

  const [formData, setFormData] = useState({ bulkUpload: "" });
  const [error, setError] = useState({});

  // on component unload clear the bulkUpload reducer store
  useEffect(() => {
    return () => {
      dispatch(resetBulkUpload());
    };
  }, []);

  const handleValidation = (name, value) => {
    let errorMsg = "";
    switch (name) {
      case "bulkUpload":
        errorMsg = requiredValidation(name, value);
        break;
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
      bulkUpload: formData.bulkUpload,
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = isFormValid(formData);
    const param = getParam(formData);
    if (!isValid) {
      return;
    }
    dispatch(bulkUploadAsync(param));
  };

  return (
    <div className="bulkUpload-wrapper">
      <HeaderStrip pageName="Bulk Upload" isRequiredNote={true}>
        <Breadcrumb>
          <BreadcrumbSection link onClick={() => navigate("/")}>
            Home
          </BreadcrumbSection>
          <BreadcrumbDivider icon="right chevron" />
          <BreadcrumbSection link onClick={() => navigate("/viewAsset")}>
            Assets
          </BreadcrumbSection>
          <BreadcrumbDivider icon="right chevron" />
          <BreadcrumbSection active>Bulk Upload</BreadcrumbSection>
        </Breadcrumb>
      </HeaderStrip>

      <div className="main-container">
        <Form size="large" onSubmit={handleSubmit}>
          <Grid>
            <Grid.Column
              computer={16}
              mobile={16}
              tablet={16}
              style={{ paddingLeft: "26px", paddingRight: "26px" }}
            >
              <Card fluid>
                <CardContent>
                  <UploadButton
                    label="Upload Files (upload only zip folder)"
                    required
                    name="bulkUpload"
                    onChange={handleChange}
                    error={error.bulkUpload ?? false}
                  />
                </CardContent>
              </Card>
              {isSuccess && (
                <Message
                  success
                  header="Bulk Upload was successful"
                  content="Please wait untill it is approved by the Admin"
                />
              )}
              <Button className="commonGlobalBtn" floated="right">
                Submit &nbsp; &nbsp;
                <Icon name="paper plane" />
              </Button>
            </Grid.Column>
          </Grid>
        </Form>
      </div>
    </div>
  );
}
