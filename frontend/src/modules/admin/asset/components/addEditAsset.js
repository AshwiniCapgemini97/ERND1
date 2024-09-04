import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Form, FormGroup, Header, Button, Icon } from "semantic-ui-react";
import Notification from "../../../../shared/components/notification/notification";
import InputBox from "../../../../shared/components/inputBox/inputBox";
import SelectBox from "../../../../shared/components/selectBox/selectBox";
import { pageURL, activeInactiveList } from "../../../../shared/constants/constant";
import { requiredValidation } from "../../../../shared/utils/validation";
import useFetch from "../../../../shared/utils/useFetch";
import axios from "axios";

export default function AddEditAsset() {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const assetId = searchParams.get("assetId");

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
    status:""
  });
  const [error, setError] = useState({});

  const { data: asset, loading, error: fetchError } = useFetch(assetId ? `/api/assets/${assetId}` : null);

  useEffect(() => {
    if (asset) {
      console.log(asset)
      setFormData({
        name: asset.asset[0].name || "",
        asset_types: asset.asset_types || [],
        asset_sectors: asset.asset_sectors || [],
        asset_technologies: asset.asset_technologies || [],
        asset_business:  asset.asset_business || [],
        asset_portfolios: asset. asset_portfolios || [],
        asset_groups: asset.asset_groups || [],
        source_code: asset.source_code || "",
        logo: asset.logo || "",
        assetFiles: asset.assetFiles || [],
        tags: asset.asset[0].tags || "",
        links: asset.asset[0].links || "",
        //link2: "",
        //link3: "",
        platform_requirements: asset.asset[0].platform_requirements || "",
        logistics_information: asset.asset[0].logistics_information || "",
        tools: asset.asset[0].tools || "",
        last_events: asset.asset[0].last_events || "",
        industry_partnership: asset.asset[0].industry_partnership || "",
        setup_documentation: asset.asset[0].setup_documentation || "",
        short_description: asset.asset[0].short_description || "",
        description: asset.asset[0].description || "",
        customer_issues: asset.asset[0].customer_issues ||  "",
        benifits: asset.asset[0].benifits || "",
        solutions: asset.asset[0].solutions || "",
        status:asset.asset[0].status|| "",
        asset_file_type: asset.asset[0].asset_file_type || "CONFIDENTIAL",
      });
    }
  }, [asset]);

  const handleValidation = (name, value) => {
    let errorMsg = "";
    switch (name) {
      case "name":
      case "email":
      case "status":
        errorMsg = requiredValidation(name, value);
        break;
    }
    return errorMsg;
  };

  const handleChange = (name, value) => {
    const errorMsg = handleValidation(name, value);
    if (errorMsg) {
      setError({ ...error, [name]: errorMsg });
    } else {
      const copyError = { ...error };
      delete copyError[name];
      setError({ ...copyError });
    }
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

  const getParam = (formData) => {
    return {
      name: formData.name.trim(),
      email: formData.email.trim(),
      status: formData.status.trim(),
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = isFormValid(formData);
    if (!isValid) {
      return;
    }

    const param = getParam(formData);

    try {
      if (assetId) {
        await axios.put(`/api/assets/${assetId}`, param);
      } else {
        await axios.post("/api/assets", param);
      }
      navigate(pageURL.userList);
    } catch (err) {
      console.error("Failed to save user:", err.response || err.message || err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (fetchError) return <div>Error: {fetchError.message}</div>;

  return (
    <div className="userListWrapper">
      <Header size="medium">
        {assetId ? "Edit Asset" : "Add Asset"}
        <Button floated="right" onClick={() => navigate(pageURL.assetList)}>
          Back
        </Button>
      </Header>

      <Notification />

      <Form onSubmit={handleSubmit}>
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
          <InputBox
            name="tools"
            label="Tools"
          // required
            value={formData.tools}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="Tools"
            error={error.email ?? false}
          />
        </FormGroup>
        <FormGroup widths={2}>
          <InputBox
            name="short_description"
            label="Short Description"
            value={formData.short_description}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="Short Description"
            error={error.account_name ?? false}
          />
          <InputBox
            name="description"
            label="Description"
            value={formData.description}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="Description"
            error={error.project_name ?? false}
          />
        </FormGroup>
        <FormGroup widths={2}>
          <InputBox
            name="benifits"
            label="Benifits"
            value={formData.benifits}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="Benifits"
            error={error.project_id ?? false}
          />
          <InputBox
            name="solutions"
            label="Solutions"
            value={formData.solutions}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="solutions"
            error={error.solutions ?? false}
          />
        </FormGroup>
        <FormGroup widths={2}>
          <SelectBox
            name="status"
            label="Status"
            value={formData.status}
            placeholder="Choose here"
            options={activeInactiveList}
            onChange={handleChange}
          />
           <InputBox
            name="customer_issues"
            label="Customer Issues"
            value={formData.customer_issues}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="Customer Issues"
            error={error.solutions ?? false}
          />
        </FormGroup>
        <FormGroup widths={2}>
          <InputBox
            name="platform_requirements"
            label="Platform Requirements"
            value={formData.platform_requirements}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="Platform Requirements"
            error={error.project_id ?? false}
          />
          <InputBox
            name="logistics_information"
            label="Logistics Information"
            value={formData.logistics_information}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="Logistics Information"
            error={error.solutions ?? false}
          />
        </FormGroup>
        <FormGroup widths={2}>
          <InputBox
            name="industry_partnership"
            label="Industry Partnership"
            value={formData.industry_partnership}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="Industry Partnership"
            error={error.project_id ?? false}
          />
          <InputBox
            name="last_events"
            label="Last Events"
            value={formData.last_events}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="Last Events"
            error={error.last_events ?? false}
          />
        </FormGroup>

        <div className="submit-btn-footer">
          <Button className="commonGlobalBtn" type="submit">
            Submit &nbsp; &nbsp;
            <Icon name="paper plane" />
          </Button>
        </div>
      </Form>
    </div>
  );
}
