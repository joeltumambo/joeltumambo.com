import React from "react";
import classnames from "classnames";
import styles from "../styles/Grid.module.css";

interface GridProps {
  container?: boolean;
  item?: boolean;
  spacing?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  direction?: string;
  alignItems?: string;
  alignContent?: string;
}

const flexString = (columns: number): string => `0 0 calc(${100 / columns}%)`;

const Grid: React.FC<GridProps> = ({
  container,
  item,
  spacing = 1,
  xs = 12,
  sm,
  md,
  lg,
  direction,
  alignItems,
  alignContent,
  children,
}) => {
  const gap = spacing * 8;
  const xsColumns = 12 / xs;
  const smColumns = 12 / (sm ?? xs);
  const mdColumns = 12 / (md ?? sm ?? xs);
  const lgColumns = 12 / (lg ?? md ?? sm ?? xs);

  const xsFlex = flexString(xsColumns);
  const smFlex = flexString(smColumns);
  const mdFlex = flexString(mdColumns);
  const lgFlex = flexString(lgColumns);

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
          alignItems: alignItems,
          alignContent: alignContent,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Grid;
