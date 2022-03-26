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

type TypographySizeType = number | "inherit";

interface TypographyProps {
  component?: TypographyComponentType;
  size?:
    | TypographySizeType
    | {
        xs: TypographySizeType;
        sm?: TypographySizeType;
        md?: TypographySizeType;
        lg?: TypographySizeType;
      };
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
  align?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
}

const sizeString = (size?: TypographySizeType) =>
  size ? (size == "inherit" ? size : `${1 + (1 / 8) * size}rem`) : undefined;

const Typography: React.FC<TypographyProps> = ({
  component = "span",
  size = 0,
  weight = 400,
  lineHeight = 1,
  gutter = 1,
  color = "inherit",
  whiteSpace = "normal",
  align = "left",
  children,
}) => {
  let xsSize;
  let smSize;
  let mdSize;
  let lgSize;

  if (typeof size === "object") {
    xsSize = sizeString(size.xs);
    smSize = sizeString(size.sm) ?? xsSize;
    mdSize = sizeString(size.md) ?? smSize;
    lgSize = sizeString(size.lg) ?? mdSize;
  } else {
    xsSize = sizeString(size);
    smSize = xsSize;
    mdSize = xsSize;
    lgSize = xsSize;
  }

  return React.createElement(
    component,
    {
      className: styles.container,
      style: {
        "--xs-size": xsSize,
        "--sm-size": smSize,
        "--md-size": mdSize,
        "--lg-size": lgSize,
        textAlign: align,
        marginBottom: `${gutter}em`,
        fontWeight: weight,
        lineHeight: `${1 + (1 / 4) * lineHeight}em`,
        color: color,
        whiteSpace: whiteSpace,
      } as React.CSSProperties,
    },
    children
  );
};

export default Typography;
