import React from "react";
import styles from "../styles/Container.module.css";

interface ContainerProps {
  id?: string;
  component?: "section" | "div";
  background?: string;
  minHeight?: string
}

const Container: React.FC<ContainerProps> = ({
  id,
  component = "section",
  background,
  minHeight,
  children,
}) => {
  return React.createElement(
    component,
    {
      id: id,
      className: styles.container,
      style: {
        background: background,
        minHeight: minHeight
      } as React.CSSProperties,
    },
    <div className={styles.wrapper}>{children}</div>
  );
};

export default Container;
