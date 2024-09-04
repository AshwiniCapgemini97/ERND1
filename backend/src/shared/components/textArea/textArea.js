import React from "react";
import {
  FormTextArea,
  FormField,
  TextArea as TextAreaSementic,
} from "semantic-ui-react";

const TextArea = ({
  className = "",
  name,
  label,
  required = false,
  onChange,
  error = false,
  ...rest
}) => {
  const handleChange = (event) => {
    // here we are returning (name, value, event)
    onChange(event.target.name, event.target.value, event);
  };

  if (label) {
    return (
      <FormField
        className={`textAreaWrapper ${className}`}
        required={required}
        error={!!error} // here error props should always be boolean type
      >
        <label htmlFor={name}>{label}</label>
        <TextAreaSementic
          id={name}
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
    <FormTextArea label={label} name={name} onChange={handleChange} {...rest} />
  );
};

export default TextArea;
