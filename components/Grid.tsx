import React from "react";
import classnames from "classnames";
import styles from "../styles/Grid.module.css";

type GridFlexType = number | boolean;

interface GridProps {
  container?: boolean;
  item?: boolean;
  spacing?:
    | number
    | {
        xs: number;
        sm?: number;
        md?: number;
        lg?: number;
      };
  xs?: GridFlexType;
  sm?: GridFlexType;
  md?: GridFlexType;
  lg?: GridFlexType;
  direction?: string;
  placeItems?: string;
  placeContent?: string;
}

const flexString = (flex: GridFlexType): string => {
  if (typeof flex === "number") {
    const columns = 12 / flex;
    return `0 0 ${100 / columns}%`;
  }
  return `${flex ? 1 : 0} 0`;
};

const Grid: React.FC<GridProps> = ({
  container,
  item,
  spacing = 1,
  xs = 12,
  sm = xs,
  md = sm,
  lg = md,
  direction,
  placeItems,
  placeContent,
  children,
}) => {
  let xsGap;
  let smGap;
  let mdGap;
  let lgGap;
  const xsFlex = flexString(xs);
  const smFlex = flexString(sm);
  const mdFlex = flexString(md);
  const lgFlex = flexString(lg);

  if (typeof spacing === "object") {
    xsGap = spacing.xs * 8;
    smGap = spacing.sm ? spacing.sm * 8 : xsGap;
    mdGap = spacing.md ? spacing.md * 8 : smGap;
    lgGap = spacing.lg ? spacing.lg * 8 : mdGap;
  } else {
    [xsGap, smGap, mdGap, lgGap] = Array(4).fill(spacing * 8);
  }

  return (
    <div
      className={classnames(container && styles.container, item && styles.item)}
      style={
        {
          ...(container && {
            "--xs-gap": `${xsGap}px`,
            "--sm-gap": `${smGap}px`,
            "--md-gap": `${mdGap}px`,
            "--lg-gap": `${lgGap}px`,
          }),
          ...(item && {
            "--xs-flex": `${xsFlex}`,
            "--sm-flex": `${smFlex}`,
            "--md-flex": `${mdFlex}`,
            "--lg-flex": `${lgFlex}`,
          }),
          flexDirection: direction,
          placeItems: placeItems,
          placeContent: placeContent,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Grid;
