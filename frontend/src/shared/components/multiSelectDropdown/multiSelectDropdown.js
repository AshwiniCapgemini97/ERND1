import React from "react";
import { FormField, Dropdown } from "semantic-ui-react";
import "./css/multiSelectDropdown.scss";

export default function MultiSelectDropdown({
  className = "",
  name,
  label,
  required = false,
  multiple,
  selection,
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
        className={`multiSelectDropdownWrapper ${className}`}
        required={required}
        error={!!error} // here error props should always be boolean type
      >
        <label htmlFor={name}>{label}</label>
        <Dropdown
          id={name}
          name={name}
          multiple
          selection
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
    <FormField className={`multiSelectDropdownWrapper ${className}`}>
      <Dropdown
        name={name}
        multiple
        selection
        onChange={handleChange}
        {...rest}
      />
    </FormField>
  );
}
