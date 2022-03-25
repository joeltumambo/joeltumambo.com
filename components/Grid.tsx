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
}

const Grid: React.FC<GridProps> = ({
  container,
  item,
  spacing = 1,
  xs = 12,
  sm,
  md,
  lg,
  children,
}) => {
  const gap = spacing * 8;
  const xsColumns = 12 / xs;
  const smColumns = 12 / (sm ?? xs);
  const mdColumns = 12 / (md ?? sm ?? xs);
  const lgColumns = 12 / (lg ?? md ?? sm ?? xs);

  return (
    <div
      className={classnames(container && styles.container, item && styles.item)}
      style={
        {
          ...(container && { "--gap": `${gap}px` }),
          ...(item && {
            "--xs-width": `${100 / xsColumns}%`,
            "--sm-width": `${100 / smColumns}%`,
            "--md-width": `${100 / mdColumns}%`,
            "--lg-width": `${100 / lgColumns}%`,
          }),
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Grid;
