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

type TypographyAlignType =
  | "left"
  | "right"
  | "center"
  | "justify"
  | "initial"
  | "inherit";

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
  align?:
    | TypographyAlignType
    | {
        xs: TypographyAlignType;
        sm?: TypographyAlignType;
        md?: TypographyAlignType;
        lg?: TypographyAlignType;
      };
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

  let xsAlign;
  let smAlign;
  let mdAlign;
  let lgAlign;

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

  if (typeof align === "object") {
    xsAlign = align.xs;
    smAlign = align.sm ?? xsAlign;
    mdAlign = align.md ?? smAlign;
    lgAlign = align.lg ?? mdAlign;
  } else {
    xsAlign = align;
    smAlign = xsAlign;
    mdAlign = xsAlign;
    lgAlign = xsAlign;
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
        "--xs-align": xsAlign,
        "--sm-align": smAlign,
        "--md-align": mdAlign,
        "--lg-align": lgAlign,
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
