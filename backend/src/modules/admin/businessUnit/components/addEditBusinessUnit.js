import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Form, FormGroup, Header, Button } from "semantic-ui-react";
import Notification from "../../../../shared/components/notification/notification";
import InputBox from "../../../../shared/components/inputBox/inputBox";
import SelectBox from "../../../../shared/components/selectBox/selectBox";
import { pageURL, activeInactiveList } from "../../../../shared/constants/constant";
import { requiredValidation } from "../../../../shared/utils/validation";
import axios from "axios";

export default function AddEditBusinessUnit() {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const businessUnitId = searchParams.get("businessUnitId");

  const [formData, setFormData] = useState({
    title: "",
    status: "INACTIVE",
  });
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchBusinessUnit = async () => {
      try {
        const response = await axios.get(`/api/business_functions/${businessUnitId}`);
        setFormData(response.data);
      } catch (err) {
        console.error("Failed to fetch business unit:", err);
      }
    };

    if (businessUnitId) fetchBusinessUnit();

    return () => {
      setFormData({
        title: "",
        status: "INACTIVE",
      });
    };
  }, [businessUnitId]);

  const handleValidation = (name, value) => {
    let errorMsg = "";
    switch (name) {
      case "title":
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
      title: formData.title.trim(),
      status: formData.status.trim(),
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = isFormValid(formData);
    const param = getParam(formData);
    if (!isValid) {
      return;
    }

    try {
      if (businessUnitId) {
        await axios.put(`/api/business_functions/${businessUnitId}`, param);
      } else {
        await axios.post(`/api/business_functions`, param);
      }
      navigate(pageURL.businessUnitList);
    } catch (err) {
      console.error("Failed to save business unit:", err);
    }
  };

  return (
    <div className="businessUnitListWrapper">
      <Header size="medium">
        {businessUnitId ? "Edit Business Unit" : "Add Business Unit"}
        <Button floated="right" onClick={() => navigate(pageURL.businessUnitList)}>
          Back
        </Button>
      </Header>

      <Notification />

      <Form onSubmit={handleSubmit}>
        <FormGroup widths={2}>
          <InputBox
            name="title"
            label="Title"
            required
            value={formData.title}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="Title"
            error={error.title ?? false}
          />
        </FormGroup>
        <FormGroup widths={2}>
          <SelectBox
            name="status"
            label="Status"
            required
            options={activeInactiveList}
            value={formData.status}
            onChange={handleChange}
            error={error.status ?? false}
          />
        </FormGroup>
        <Button primary type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
