import React from "react";
import classnames from "classnames";
import styles from "../styles/Button.module.css";
import Typography from "./Typography";

export type ButtonComponentType = "button" | "a";

export type ButtonSizeType = "small" | "default" | "large";

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
  size = "default",
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
  const wrappedChildren = (
    <>
      <div className={styles.container}>
        {iconLeading && (
          <span className="material-icons-round">{iconLeading}</span>
        )}
        <Typography
          size="inherit"
          weight={500}
          gutter={0}
          whiteSpace="none"
          lineHeight={0}
        >
          {children}
        </Typography>
        {iconTrailing && (
          <span className="material-icons-round">{iconTrailing}</span>
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
