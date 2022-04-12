import React from "react";
import Link, { LinkProps } from "next/link";
import classnames from "classnames";
import styles from "../styles/Button.module.css";
import Typography from "./Typography";
import Icon from "./Icon";

export type ButtonSizeType = "small" | "default" | "large";
export type ButtonLinkType = LinkProps & {
  external?: boolean;
};

interface ButtonProps {
  size?: ButtonSizeType;
  filled?: boolean;
  brightness?: "dark" | "light";
  iconLeading?: string;
  iconTrailing?: string;
  disabled?: boolean;
  onClick?: () => void;
  color?: string;
  link?: ButtonLinkType;
}

const Button: React.FC<ButtonProps> = ({
  filled = false,
  size = "default",
  brightness = "light",
  iconLeading,
  iconTrailing,
  disabled,
  onClick,
  color = "var(--indigo-a700)",
  link,
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
  const iconColor = filled ? "var(--grey-50)" : color;
  const buttonStyle = {
    "--color": color,
  } as React.CSSProperties;

  const wrappedChildren = (
    <>
      <div className={styles.container}>
        {iconLeading && (
          <Icon name={iconLeading} size={sizeMap[size]} color={iconColor} />
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
          <Icon
            name={iconTrailing}
            size={sizeMap[size]}
            color={iconColor}
          />
        )}
      </div>
      <span className={styles.overlay}></span>
    </>
  );

  return link ? (
    link.external ? (
      <a
        className={buttonClass}
        style={buttonStyle}
        href={link.href as string}
        target="_blank"
        rel="noreferrer"
      >
        {wrappedChildren}
      </a>
    ) : (
      <Link {...link} passHref>
        <a className={buttonClass} style={buttonStyle}>
          {wrappedChildren}
        </a>
      </Link>
    )
  ) : (
    <button className={buttonClass} style={buttonStyle} onClick={onClick}>
      {wrappedChildren}
    </button>
  );
};

export default Button;
