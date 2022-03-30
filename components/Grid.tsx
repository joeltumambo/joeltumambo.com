import React from "react";
import classnames from "classnames";
import styles from "../styles/Grid.module.css";

type GridFlexType = number | boolean;

interface GridProps {
  container?: boolean;
  item?: boolean;
  spacing?: number;
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
  const gap = spacing * 8;
  const xsFlex = flexString(xs);
  const smFlex = flexString(sm);
  const mdFlex = flexString(md);
  const lgFlex = flexString(lg);

  return (
    <div
      className={classnames(container && styles.container, item && styles.item)}
      style={
        {
          ...(container && {
            "--gap": `${gap}px`,
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
