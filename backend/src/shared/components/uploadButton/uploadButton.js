import React from "react";
import { FormField } from "semantic-ui-react";
import "./css/uploadButton.scss";

const UploadButton = ({
  className = "",
  name,
  label,
  multiple = false,
  required = false,
  onChange,
  error = false,
  ...rest
}) => {
  const handleChange = (event) => {
    // here we are returning (name, selectedFile, event)
    if (multiple) {
      onChange(event.target.name, event.target.files, event);
    } else {
      onChange(event.target.name, event.target.files[0], event);
    }
  };

  if (label) {
    return (
      <FormField
        required={required}
        error={!!error} // here error props should always be boolean type
        className={`uploadButtonWrapper ${className}`}
      >
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          type="file"
          multiple={!!multiple}
          // name={multiple ? `${name}[]` : name}
          name={name}
          onChange={handleChange}
          {...rest}
        />
        {typeof error === "string" && error !== "" && (
          <div
            role="alert"
            aria-atomic={true}
            className="ui pointing above prompt label myErrorLabel"
          >
            {error}
          </div>
        )}
      </FormField>
    );
  }
  return (
    <FormField className={`uploadButtonWrapper ${className}`}>
      <input
        name={name}
        type="file"
        multiple={!!multiple}
        label={label}
        onChange={handleChange}
        {...rest}
      />
    </FormField>
  );
};

export default UploadButton;
