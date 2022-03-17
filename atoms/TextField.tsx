import React, { ChangeEventHandler } from "react";
import styles from "../styles/TextField.module.css";

interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  multiline?: boolean;
  error?: boolean;
  helper?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  multiline,
  helper,
  error,
}) => {
  const input = (
    <input
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      {multiline ? textArea : input}
      {helper && <span className={error ? styles.error : ""}>{helper}</span>}
    </div>
  );
};

export default TextField;
