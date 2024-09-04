import React from "react";
import { FormField, Select } from "semantic-ui-react";
import "./css/selectBox.scss";

export default function SelectBox({
  className = "",
  name,
  label,
  required = false,
  options,
  onChange,
  error = false,
  ...rest
}) {
  const handleChange = (event, data) => {
    // here we are returning (name, value, event)
    onChange(data.id, data.value, event);
  };

  if (label) {
    return (
      <FormField
        className={`selectBoxWrapper ${className}`}
        required={required}
        error={!!error} // here error props should always be boolean type
      >
        <label htmlFor={name}>{label}</label>
        <Select
          id={name}
          name={name}
          onChange={handleChange}
          options={options}
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
    <FormField className={`selectBoxWrapper ${className}`}>
      <Select name={name} onChange={handleChange} options={options} {...rest} />
    </FormField>
  );
}
