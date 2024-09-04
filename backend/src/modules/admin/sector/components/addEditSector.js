import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Form, FormGroup, Header, Button, Icon } from "semantic-ui-react";
import Notification from "../../../../shared/components/notification/notification";
import InputBox from "../../../../shared/components/inputBox/inputBox";
import SelectBox from "../../../../shared/components/selectBox/selectBox";
import { pageURL, activeInactiveList, apiBaseURL } from "../../../../shared/constants/constant";
import { requiredValidation } from "../../../../shared/utils/validation";
import useFetch from "../../../../shared/utils/useFetch"; 
import axios from "axios";

export default function AddEditSector() {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sectorId = searchParams.get("sectorId");
  
  const [formData, setFormData] = useState({
    title: "",
    status: "INACTIVE",
  });
  const [error, setError] = useState({});

  const { data: sector, loading, error: fetchError } = useFetch(sectorId ? `/api/sectors/${sectorId}` : null);

  useEffect(() => {
    if (sector) {
      setFormData({
        title: sector.title || "",
        status: sector.status || "INACTIVE",
      });
    }
  }, [sector]);

  const handleValidation = (title, value) => {
    let errorMsg = "";
    switch (title) {
      case "title":
      case "status":
        errorMsg = requiredValidation(title, value);
        break;
    }
    return errorMsg;
  };

  const handleChange = (title, value) => {
    const errorMsg = handleValidation(title, value);
    if (errorMsg) {
      setError({ ...error, [title]: errorMsg });
    } else {
      const copyError = { ...error };
      delete copyError[title];
      setError({ ...copyError });
    }
    setFormData((prevState) => ({
      ...prevState,
      [title]: value,
    }));
  };

  const isFormValid = (formData) => {
    let isValid = true;
    const errObj = {};
    for (let title in formData) {
      const err = handleValidation(title, formData[title]);
      if (err) errObj[title] = err;
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
    } else{
      try {
        const res= await axios.patch(`${apiBaseURL}api/sectors/${sectorId}`, formData);
        res?.data?.statusCode === 200 && navigate(pageURL.sectorList)
      } catch (error) {
        console.error(error)
      }
    }
    //submitting form data to be done
  };

  if (loading) return <div>Loading...</div>;
  if (fetchError) return <div>Error: {fetchError.message}</div>;

  return (
    <div className="sectorListWrapper">
      <Header size="medium">
        Edit Sector
        <Button floated="right" onClick={() => navigate(pageURL.sectorList)}>
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
            value={formData.status}
            placeholder="Choose here"
            options={activeInactiveList}
            onChange={handleChange}
          />
        </FormGroup>

        <div className="submit-btn-footer">
          <Button className="commonGlobalBtn">
            Submit &nbsp; &nbsp;
            <Icon name="paper plane" />
          </Button>
        </div>
      </Form>
    </div>
  );
}