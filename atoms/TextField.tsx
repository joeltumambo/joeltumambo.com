import React, { ChangeEventHandler } from "react";
import classnames from "classnames";
import styles from "../styles/TextField.module.css";

interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  type?: "text" | "email";
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  multiline?: boolean;
  error?: boolean;
  helper?: string;
  disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  value,
  type = "text",
  onChange,
  placeholder,
  multiline,
  helper,
  error,
  disabled,
}) => {
  const input = (
    <input
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
  const textArea = (
    <textarea
      id={id}
      placeholder={placeholder}
      rows={2}
      value={value}
      onChange={onChange}
    />
  );

  return (
    <div className={classnames(styles.container, disabled && styles.disabled)}>
      <label htmlFor={id}>{label}</label>
      {multiline ? textArea : input}
      {helper && <span className={error ? styles.error : ""}>{helper}</span>}
    </div>
  );
};

export default TextField;
