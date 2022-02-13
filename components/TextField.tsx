import React from "react";
import styles from "../styles/TextField.module.css";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  multiline?: boolean;
  error?: boolean;
  helper?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  multiline,
  helper,
  error,
}) => (
  <div className={styles.container}>
    <label>{label}</label>
    {multiline ? (
      <textarea placeholder={placeholder} rows={3} />
    ) : (
      <input placeholder={placeholder} />
    )}
    {helper && <span className={error ? styles.error : ""}>{helper}</span>}
  </div>
);

export default TextField;
