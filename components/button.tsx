import React from "react";
import classnames from "classnames";
import styles from "../styles/Button.module.css";

interface ButtonProps {
  component?: "button" | "a";
  variant?: "filled" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  brightness?: "dark" | "light";
  iconLeading?: string;
  iconTrailing?: string;
}

const Button: React.FC<ButtonProps> = ({
  component = "button",
  variant = "text",
  size = "medium",
  brightness = "light",
  iconLeading,
  iconTrailing,
  children,
}) => {
  const buttonClass = classnames(
    styles.button,
    styles[brightness],
    styles[variant],
    styles[size]
  );
  const wrappedChildren = (
    <>
      <div className={styles.container}>
        {iconLeading && (
          <span className="material-icons md-18">{iconLeading}</span>
        )}
        <span>{children}</span>
        {iconTrailing && (
          <span className="material-icons md-18">{iconTrailing}</span>
        )}
      </div>
      <span className={styles.overlay}></span>
    </>
  );

  return React.createElement(
    component,
    {
      className: buttonClass,
    },
    wrappedChildren
  );
};

export default Button;
