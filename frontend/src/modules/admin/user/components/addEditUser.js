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

export default function AddEditUser() {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    account_name: "",
    project_name: "",
    project_id: "",
    project_manager: "",
    status: "INACTIVE",
  });
  const [error, setError] = useState({});

  const { data: user, loading, error: fetchError } = useFetch(userId ? `/api/users/${userId}` : null);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        account_name: user.account_name || "",
        project_name: user.project_name || "",
        project_id: user.project_id || "",
        project_manager: user.project_manager || "",
        status: user.status || "INACTIVE",
      });
    }
  }, [user]);

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
      if (userId) {
        await axios.put(`/api/users/${userId}`, param);
      } else {
        await axios.post("/api/users", param);
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
        {userId ? "Edit User" : "Add User"}
        <Button floated="right" onClick={() => navigate(pageURL.userList)}>
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
            name="email"
            label="Email"
            required
            value={formData.email}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="Email"
            error={error.email ?? false}
          />
        </FormGroup>
        <FormGroup widths={2}>
          <InputBox
            name="account_name"
            label="Account Name"
            value={formData.account_name}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="Account Name"
            error={error.account_name ?? false}
          />
          <InputBox
            name="project_name"
            label="Project Name"
            value={formData.project_name}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="Project Name"
            error={error.project_name ?? false}
          />
        </FormGroup>
        <FormGroup widths={2}>
          <InputBox
            name="project_id"
            label="Project Id"
            value={formData.project_id}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="Project Id"
            error={error.project_id ?? false}
          />
          <InputBox
            name="project_manager"
            label="Project Manager"
            value={formData.project_manager}
            onChange={handleChange}
            fluid
            type="text"
            placeholder="Project Manager"
            error={error.project_manager ?? false}
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
          <Button className="commonGlobalBtn" type="submit">
            Submit &nbsp; &nbsp;
            <Icon name="paper plane" />
          </Button>
        </div>
      </Form>
    </div>
  );
}
