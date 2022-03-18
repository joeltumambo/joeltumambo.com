import React from "react";
import classnames from "classnames";
import styles from "../styles/Button.module.css";
import Typography from "./Typography";

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
  onClick?: () => void;
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  component = "button",
  filled = false,
  size = "medium",
  brightness = "light",
  iconLeading,
  iconTrailing,
  disabled,
  onClick,
  href,
  target,
  children,
}) => {
  const buttonClass = classnames(
    styles.button,
    styles[brightness],
    filled && styles.filled,
    disabled && styles.disabled,
    styles[size]
  );
  const sizeMap = {
    small: -1,
    medium: 0,
    large: 1,
  };
  const iconSizeMap = {
    small: "md-14",
    medium: "md-16",
    large: "md-18",
  };
  const wrappedChildren = (
    <>
      <div className={styles.container}>
        {iconLeading && (
          <span className={`material-icons-round ${iconSizeMap[size]}`}>
            {iconLeading}
          </span>
        )}
        <Typography size={sizeMap[size]} weight={500} gutter={0} whiteSpace="none">
          {children}
        </Typography>
        {iconTrailing && (
          <span className={`material-icons-round ${iconSizeMap[size]}`}>
            {iconTrailing}
          </span>
        )}
      </div>
      <span className={styles.overlay}></span>
    </>
  );

  return React.createElement(
    href ? "a" : component,
    {
      className: buttonClass,
      onClick: onClick,
      href: href,
      target: target,
    },
    wrappedChildren
  );
};

export default Button;
