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

type TypographyWhiteSpaceType =
  | "none"
  | "normal"
  | "pre"
  | "nowrap"
  | "pre-wrap"
  | "pre-line"
  | "break-spaces";

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
  color?: string;
  whiteSpace?:
    | TypographyWhiteSpaceType
    | {
        xs: TypographyWhiteSpaceType;
        sm?: TypographyWhiteSpaceType;
        md?: TypographyWhiteSpaceType;
        lg?: TypographyWhiteSpaceType;
      };
  align?:
    | TypographyAlignType
    | {
        xs: TypographyAlignType;
        sm?: TypographyAlignType;
        md?: TypographyAlignType;
        lg?: TypographyAlignType;
      };
}

const sizeString = (size: TypographySizeType) =>
  size === "inherit" ? size : `${1 + (1 / 8) * size}rem`;

const Typography: React.FC<TypographyProps> = ({
  component = "span",
  size = 0,
  weight = 400,
  lineHeight = 1,
  gutter = 1,
  color = "inherit",
  whiteSpace = "normal",
  align = "inherit",
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

  let xsWhiteSpace;
  let smWhiteSpace;
  let mdWhiteSpace;
  let lgWhiteSpace;

  if (typeof size === "object") {
    xsSize = sizeString(size.xs);
    smSize = size.sm ? sizeString(size.sm) : xsSize;
    mdSize = size.md ? sizeString(size.md) : smSize;
    lgSize = size.lg ? sizeString(size.lg) : mdSize;
  } else {
    [xsSize, smSize, mdSize, lgSize] = Array(4).fill(sizeString(size));
  }

  if (typeof align === "object") {
    xsAlign = align.xs;
    smAlign = align.sm ?? xsAlign;
    mdAlign = align.md ?? smAlign;
    lgAlign = align.lg ?? mdAlign;
  } else {
    [xsAlign, smAlign, mdAlign, lgAlign] = Array(4).fill(align);
  }

  if (typeof whiteSpace === "object") {
    xsWhiteSpace = whiteSpace.xs;
    smWhiteSpace = whiteSpace.sm ?? xsWhiteSpace;
    mdWhiteSpace = whiteSpace.md ?? smWhiteSpace;
    lgWhiteSpace = whiteSpace.lg ?? mdWhiteSpace;
  } else {
    [xsWhiteSpace, smWhiteSpace, mdWhiteSpace, lgWhiteSpace] =
      Array(4).fill(whiteSpace);
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
        "--xs-white-space": xsWhiteSpace,
        "--sm-white-space": smWhiteSpace,
        "--md-white-space": mdWhiteSpace,
        "--lg-white-space": lgWhiteSpace,
        marginBottom: `${gutter}em`,
        fontWeight: weight,
        lineHeight: `${1 + (1 / 4) * lineHeight}em`,
        color: color,
      } as React.CSSProperties,
    },
    children
  );
};

export default Typography;
