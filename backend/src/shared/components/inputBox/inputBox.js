import React from "react";
import { FormField, Input } from "semantic-ui-react";

const InputBox = ({
  className = "",
  name,
  required = false,
  label,
  onChange,
  error = false,
  ...rest
}) => {
  const handleChange = (event) => {
    // here we are returning (name, value, event)
    onChange(event.target.name, event.target.value, event);
  };

  return (
    <FormField
      className={`inputBoxWrapper ${className}`}
      required={required}
      error={!!error} // here error props should always be boolean type
    >
      {label && <label htmlFor={name}>{label}</label>}
      <Input id={name} name={name} onChange={handleChange} {...rest} />
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
};

export default InputBox;
