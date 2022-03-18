import React from "react";
import styles from "../styles/Typography.module.css";

export type TypographyComponentType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "div"
  | "span"
  | "p";

export type TypographyWeightType = 300 | 400 | 500 | 700 | 900;

interface TypographyProps {
  component?: TypographyComponentType;
  size?: number;
  lineHeight?: number;
  weight?: TypographyWeightType;
  gutter?: number;
  color?: "inherit" | "primary" | "neutral";
  whiteSpace?:
    | "none"
    | "normal"
    | "pre"
    | "nowrap"
    | "pre-wrap"
    | "pre-line"
    | "break-spaces";
}

const Typography: React.FC<TypographyProps> = ({
  component = "span",
  size = 0,
  weight = 400,
  lineHeight = 1,
  gutter = 1,
  color = "inherit",
  whiteSpace = "normal",
  children,
}) => {
  return React.createElement(
    component,
    {
      className: styles.container,
      style: {
        fontSize: `${1 * (1 + (1 / 8) * size)}rem`,
        marginBottom: `${gutter}em`,
        fontWeight: weight,
        lineHeight: `${1 * (1 + (1 / 4) * lineHeight)}em`,
        color: color,
        whiteSpace: whiteSpace,
      },
    },
    children
  );
};

export default Typography;