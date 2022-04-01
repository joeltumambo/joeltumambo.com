import React from "react";
import classnames from "classnames";
import styles from "../styles/Button.module.css";
import Typography from "./Typography";
import Icon from "./Icon";

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
  color?: string;
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
  color: colorProp = "var(--indigo-a700)",
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
    default: 0,
    large: 1,
  };
  const backgroundColor = filled ? colorProp : "none";
  const color = filled ? "var(--grey-50)" : colorProp;

  const wrappedChildren = (
    <>
      <div className={styles.container}>
        {iconLeading && (
          <Icon name={iconLeading} size={sizeMap[size]} color={color} />
        )}
        <Typography
          size={sizeMap[size]}
          weight={500}
          gutter={0}
          whiteSpace="pre"
          lineHeight={0}
        >
          {children}
        </Typography>
        {iconTrailing && (
          <Icon name={iconTrailing} size={sizeMap[size]} color={color} />
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
      style: {
        "--background-color": backgroundColor,
        "--color": color,
      } as React.CSSProperties,
    },
    wrappedChildren
  );
};

export default Button;
