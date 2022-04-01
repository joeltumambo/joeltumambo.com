import React from "react";
import styles from "../styles/Container.module.css";

interface ContainerProps {
  id?: string;
  containerRef?: React.Ref<HTMLElement>;
  component?: "section" | "div";
  background?: string;
  minHeight?: string;
}

const Container: React.FC<ContainerProps> = ({
  id,
  containerRef,
  component = "section",
  background,
  minHeight,
  children,
}) =>
  React.createElement(
    component,
    {
      id: id,
      ref: containerRef,
      className: styles.container,
      style: {
        background: background,
        minHeight: minHeight,
      } as React.CSSProperties,
    },
    <div className={styles.wrapper}>{children}</div>
  );

export default Container;
