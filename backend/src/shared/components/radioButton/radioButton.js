import React from "react";
import { FormField, Radio } from "semantic-ui-react";
import "./css/radioButton.scss";

export default function RadioButton({
  className = "",
  name,
  label,
  required = false,
  onChange,
  error = false,
  ...rest
}) {
  const handleChange = (event, { name, value }) => {
    // here we are returning (name, value, event)
    onChange(name, value, event);
  };

  return (
    <FormField
      className={`radioButtonWrapper ${className}`}
      required={required}
      error={!!error} // here error props should always be boolean type
    >
      <Radio name={name} label={label} onChange={handleChange} {...rest} />
    </FormField>
  );
}
