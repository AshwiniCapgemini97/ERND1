import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  BreadcrumbSection,
  BreadcrumbDivider,
  Breadcrumb,
  Card,
  CardDescription,
  CardContent,
  FormGroup,
} from "semantic-ui-react";
import InputBox from "../../../shared/components/inputBox/inputBox";
import TextArea from "../../../shared/components/textArea/textArea";
import TextEditor from "../../../shared/components/textEditor/textEditor";
import UploadButton from "../../../shared/components/uploadButton/uploadButton";
import MultiSelectDropdown from "../../../shared/components/multiSelectDropdown/multiSelectDropdown";
import RadioButton from "../../../shared/components/radioButton/radioButton";
import HeaderStrip from "../../../shared/components/headerStrip/headerStrip";
import GuidelinesChecklist from "./guidelinesChecklist";
import { requiredValidation } from "../../../shared/utils/validation";
import {
  getAssetPrePopulatedListAsync,
  resetCreateAsset,
} from "../redux/createAssetSlice";
import "./css/createAsset.scss";
import { Api } from "../../../shared/utils/api";

export default function CreateAsset() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const lists = useSelector((state) => state.createAssetReducer);

  const [formData, setFormData] = useState({
    name: "",
    asset_types: [],
    asset_sectors: [],
    asset_technologies: [],
    asset_business: [],
    asset_portfolios: [],
    asset_groups: [],
    source_code: "",
    logo: "",
    assetFiles: [],
    tags: "",
    links: "",
    //link2: "",
    //link3: "",
    platform_requirements: "",
    logistics_information: "",
    tools: "",
    last_events: "",
    industry_partnership: "",
    setup_documentation: "",
    short_description: "",
    description: "",
    customer_issues: "",
    benifits: "",
    solutions: "",
    asset_file_type: "CONFIDENTIAL",
    status:"INACTIVE"
  });
  const [error, setError] = useState({});
  const [isVisibleGuidelinePoupup, setVisibilityGuidelinePopup] =
    useState(false);

  // on Component load call Api to get whole dropdown lists
  useEffect(() => {
    dispatch(getAssetPrePopulatedListAsync());
    // on component unload clear the createAsset reducer store
    return () => {
      dispatch(resetCreateAsset());
    };
  }, []);

  const openGuidelinePopup = () => {
    setVisibilityGuidelinePopup(true);
  };
  const closeGuidelinePopup = () => {
    setVisibilityGuidelinePopup(false);
  };

  const handleValidation = (name, value) => {
    console.log(name,value)
    let errorMsg = "";
    switch (name) {
      case "name":
      case "asset_portfolios":
      case "asset_groups":
      case "asset_technologies":
      case "asset_sectors":
      case "asset_business":
      case "asset_types":
      //case "source_code":
      //case "logo":
      //case "assetFiles":
      case "short_description":
      case "description":
      case "customer_issues":
      case "benifits":
      case "solutions":
        errorMsg = requiredValidation(name, value);
        break;
    }
    return errorMsg;
  };

  const handleChange = (name, value) => {
    console.table(name ,value)
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
    console.log(errObj)
    return isValid;
  };

  /* always create the function because sometime state contains extra data that 
     we don't want to send to api call 
  */
  const getParam = (formData) => {
    return {
      name: formData.name.trim(),
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = isFormValid(formData);
    const param = getParam(formData);
    if (!isValid) {
      return;
    }else{
    
     try {
      await Api.post("/api/assets",formData)
      setFormData({
        name: "",
        asset_types: [],
        asset_sectors: [],
        asset_technologies: [],
        asset_business: [],
        asset_portfolios: [],
        asset_groups: [],
        source_code: "",
        logo: "",
        assetFiles: [],
        tags: "",
        links: "",
        //link2: "",
        //link3: "",
        platform_requirements: "",
        logistics_information: "",
        tools: "",
        last_events: "",
        industry_partnership: "",
        setup_documentation: "",
        short_description: "",
        description: "",
        customer_issues: "",
        benifits: "",
        solutions: "",
        asset_file_type: "CONFIDENTIAL",
        status:"INACTIVE"
      })
     } catch (error) {
      console.error(error)
      setFormData({
        name: "",
        asset_types: [],
        asset_sectors: [],
        asset_technologies: [],
        asset_business: [],
        asset_portfolios: [],
        asset_groups: [],
        source_code: "",
        logo: "",
        assetFiles: [],
        tags: "",
        links: "",
        //link2: "",
        //link3: "",
        platform_requirements: "",
        logistics_information: "",
        tools: "",
        last_events: "",
        industry_partnership: "",
        setup_documentation: "",
        short_description: "",
        description: "",
        customer_issues: "",
        benifits: "",
        solutions: "",
        asset_file_type: "CONFIDENTIAL",
        status:"INACTIVE"
      })
     }
     
    }
  };

  return (
    <div className="createAsset-wrapper">
      <HeaderStrip
        pageName="Create Assets"
        isRequiredNote={true}
        showGuidelineBtn={true}
        openGuidelinePopup={openGuidelinePopup}
      >
        <Breadcrumb>
          <BreadcrumbSection link onClick={() => navigate("/")}>
            Home
          </BreadcrumbSection>
          <BreadcrumbDivider icon="right chevron" />
          <BreadcrumbSection link onClick={() => navigate("/viewAsset")}>
            Asset
          </BreadcrumbSection>
          <BreadcrumbDivider icon="right chevron" />
          <BreadcrumbSection active>Create Asset</BreadcrumbSection>
        </Breadcrumb>
      </HeaderStrip>

      <div className="main-container">
        <Form onSubmit={handleSubmit}>
          <Grid stretched>
            <Grid.Column
              computer={11}
              mobile={16}
              tablet={9}
              style={{ paddingLeft: "26px" }}
              stretched
            >
              <Card fluid>
                <CardContent>
                  <Header size="medium">Asset Details</Header>
                  <FormGroup widths={2}>
                    <InputBox
                      name="name"
                      label="Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      fluid
                      type="text"
                      placeholder="Name"
                      error={error.name ?? false}
                    />
                    <MultiSelectDropdown
                      name="asset_portfolios"
                      onChange={handleChange}
                      label="Select Asset Portfolios"
                      required
                      placeholder="Select Asset Portfolio"
                      fluid
                      value={formData.asset_portfolios}
                      options={lists.portfolioList}
                      error={error.asset_portfolios ?? false}
                    />
                  </FormGroup>
                  <FormGroup widths={2}>
                    <MultiSelectDropdown
                      name="asset_groups"
                      onChange={handleChange}
                      label="Select Asset Groups"
                      required
                      placeholder="Select Asset Groups"
                      fluid
                      options={lists.groupList}
                      error={error.asset_groups ?? false}
                    />
                    <MultiSelectDropdown
                      name="asset_technologies"
                      onChange={handleChange}
                      label="Select Asset Technologies"
                      required
                      placeholder="Select Asset Technologies"
                      fluid
                      options={lists.technologyList}
                      error={error.asset_technologies ?? false}
                    />
                  </FormGroup>
                  <FormGroup widths={2}>
                    <MultiSelectDropdown
                      name="asset_sectors"
                      onChange={handleChange}
                      label="Select Asset Sectors"
                      required
                      placeholder="Select Asset Sectors"
                      fluid
                      options={lists.sectorList}
                      error={error.asset_sectors ?? false}
                    />
                    <MultiSelectDropdown
                      name="asset_business"
                      onChange={handleChange}
                      label="Select Businesses Unit"
                      required
                      placeholder="Select Businesses Unit"
                      fluid
                      options={lists.businessUnitList}
                      error={error.asset_business ?? false}
                    />
                  </FormGroup>

                  <MultiSelectDropdown
                    name="asset_types"
                    onChange={handleChange}
                    label="Select Asset Types"
                    required
                    placeholder="Select Asset Types"
                    fluid
                    options={lists.assetTypeList}
                    error={error.asset_types ?? false}
                  />

                  <FormGroup widths={2}>
                    <RadioButton
                      label="Capgemini Confidential"
                      name="asset_file_type"
                      value="CONFIDENTIAL"
                      checked={formData.asset_file_type === "CONFIDENTIAL"}
                      onChange={handleChange}
                    />{" "}
                    &nbsp; &nbsp; &nbsp;
                    <RadioButton
                      label="Capgemini Public"
                      name="asset_file_type"
                      value="PUBLIC"
                      checked={formData.asset_file_type === "PUBLIC"}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </CardContent>
              </Card>

              <Card fluid>
                <CardContent>
                  <TextArea
                    name="short_description"
                    label="Short Description(Maximum 100 Characters)"
                    required
                    value={formData.short_description}
                    onChange={handleChange}
                    error={error.short_description ?? false}
                  />
                  <TextEditor
                    name="description"
                    label="Description"
                    required
                    theme="snow"
                    value={formData.description}
                    onChange={handleChange}
                    error={error.description ?? false}
                  />
                  <TextEditor
                    name="customer_issues"
                    label="Customer Issues"
                    required
                    theme="snow"
                    value={formData.customer_issues}
                    onChange={handleChange}
                    error={error.customer_issues ?? false}
                  />
                  <TextEditor
                    name="benifits"
                    label="Benifts"
                    required
                    theme="snow"
                    value={formData.benifits}
                    onChange={handleChange}
                    error={error.benifits ?? false}
                  />
                  <TextEditor
                    name="solutions"
                    label="Solutions"
                    required
                    theme="snow"
                    value={formData.solutions}
                    onChange={handleChange}
                    error={error.solutions ?? false}
                  />
                </CardContent>
              </Card>
            </Grid.Column>
            <Grid.Column
              computer={5}
              mobile={16}
              tablet={7}
              style={{ paddingRight: "26px" }}
            >
              <Card fluid>
                <CardContent>
                  <CardDescription>
                    <UploadButton
                      name="source_code"
                      label="Upload Source Code"
                      //required
                      onChange={handleChange}
                      error={error.source_code ?? false}
                    />
                    <UploadButton
                      name="logo"
                      label="Upload Logo"
                      //required
                      onChange={handleChange}
                      error={error.logo ?? false}
                    />
                    <UploadButton
                      name="assetFiles"
                      label="Upload Files (Each file size should be <100MB
                        )"
                      multiple
                      //required
                      onChange={handleChange}
                      error={error.assetFiles ?? false}
                    />
                    <InputBox
                      name="tags"
                      label="Tags"
                      value={formData.tags}
                      onChange={handleChange}
                      fluid
                      type="text"
                      error={error.tags ?? false}
                    />
                    <InputBox
                      name="links"
                      label="Links"
                      value={formData.links}
                      onChange={handleChange}
                      fluid
                      type="text"
                    />
                    {/* <InputBox
                      name="link2"
                      value={formData.link2}
                      onChange={handleChange}
                      fluid
                      type="text"
                    />
                    <InputBox
                      name="link3"
                      value={formData.link3}
                      onChange={handleChange}
                      fluid
                      type="text"
                    /> */}
                    <TextArea
                      name="platform_requirements"
                      label="Platform Requirements"
                      value={formData.platform_requirements}
                      onChange={handleChange}
                    />
                    <TextArea
                      name="logistics_information"
                      label="Logistics Information"
                      value={formData.logistics_information}
                      onChange={handleChange}
                    />
                    <TextArea
                      name="tools"
                      label="Tools"
                      value={formData.tools}
                      onChange={handleChange}
                    />
                    <TextArea
                      name="last_events"
                      label="Last Events"
                      value={formData.last_events}
                      onChange={handleChange}
                    />
                    <TextArea
                      name="industry_partnership"
                      label="Industry Partnerships"
                      value={formData.industry_partnership}
                      onChange={handleChange}
                    />
                    <TextArea
                      name="setup_documentation"
                      label="Setup Documentation"
                      value={formData.setup_documentation}
                      onChange={handleChange}
                    />
                  </CardDescription>
                </CardContent>
              </Card>
            </Grid.Column>
          </Grid>

          <div className="submit-btn-footer">
            <Button className="commonGlobalBtn">
              Submit &nbsp; &nbsp;
              <Icon name="paper plane" />
            </Button>
          </div>
        </Form>
      </div>

      {/* Guideline popup */}
      <GuidelinesChecklist
        isOpen={isVisibleGuidelinePoupup}
        onClose={closeGuidelinePopup}
      />
    </div>
  );
}
