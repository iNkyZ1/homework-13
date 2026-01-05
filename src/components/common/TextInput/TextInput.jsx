import React from "react";
import "./TextInput.css";

function TextInput(props) {
  const {
    label,
    description,
    required,
    error,
    icon,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    disabled,
  } = props;

  const hasError = Boolean(error);

  return (
    <div className={`text-input ${disabled ? "text-input--disabled" : ""}`}>
      {label && (
        <label className="text-input__label">
          {label}
          {required && <span className="text-input__required"> *</span>}
        </label>
      )}

      {description && (
        <div className="text-input__description">{description}</div>
      )}

      <div
        className={
          "text-input__field-wrapper" +
          (hasError ? " text-input__field-wrapper--error" : "")
        }
      >
        {icon && <span className="text-input__icon">{icon}</span>}

        <input
          className="text-input__field"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>

      {typeof error === "string" && (
        <div className="text-input__error">{error}</div>
      )}
    </div>
  );
}

export default TextInput;
