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

export type TypographyWeightType =
  | 300
  | 400
  | 500
  | 700
  | 900

interface TypographyProps {
  component?: TypographyComponentType;
  size?: number;
  weight?: TypographyWeightType;
}

const Typography: React.FC<TypographyProps> = ({
  component = "span",
  size = 0,
  weight = 400,
  children,
}) => {
  return React.createElement(
    component,
    {
      className: styles.container,
      style: {
        fontSize: `${1 * (1 + (1 / 8) * size)}rem`,
        marginBottom: "1em",
        fontWeight: weight,
      },
    },
    children
  );
};

export default Typography;
