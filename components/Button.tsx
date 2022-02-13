import React from "react";
import classnames from "classnames";
import styles from "../styles/Button.module.css";

export type ButtonComponentType = "button" | "a";

export type ButtonSizeType = "small" | "medium" | "large";

interface ButtonProps {
  component?: ButtonComponentType;
  size?: ButtonSizeType;
  filled?: boolean;
  brightness?: "dark" | "light";
  iconLeading?: string;
  iconTrailing?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  component = "button",
  filled = false,
  size = "medium",
  brightness = "light",
  iconLeading,
  iconTrailing,
  disabled,
  children,
}) => {
  const buttonClass = classnames(
    styles.button,
    styles[brightness],
    filled && styles.filled,
    disabled && styles.disabled,
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
