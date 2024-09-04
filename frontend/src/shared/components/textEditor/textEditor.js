import React from "react";
import { FormField } from "semantic-ui-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./css/textEditor.scss";

const TextEditor = ({
  name,
  className = "",
  label,
  required = false,
  onChange,
  error = false,
  ...rest
}) => {
  const handleChange = (content, delta, source, editor) => {
    // here we are returning (name, value, editor)
    onChange(name, content, editor);
  };

  if (label) {
    return (
      <FormField
        required={required}
        error={!!error} // here error props should always be boolean type
        className={`textEditorWrapper ${className}`}
      >
        <label htmlFor={name}>{label}</label>
        <ReactQuill id={name} name={name} onChange={handleChange} {...rest} />
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
    <FormField className={`textEditorWrapper ${className}`}>
      <ReactQuill name={name} {...rest} />
    </FormField>
  );
};

export default TextEditor;
