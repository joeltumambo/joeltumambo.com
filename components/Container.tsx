import classNames from "classnames";
import React from "react";
import styles from "../styles/Container.module.css";

interface ContainerProps {
  id?: string;
  className?: string;
  containerRef?: React.RefObject<Element>;
  component?: "section" | "div" | "footer" | "header";
  background?: string;
  minHeight?: string;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({
  id,
  className,
  containerRef,
  component = "section",
  background,
  minHeight,
  style,
  children,
}) =>
  React.createElement(
    component,
    {
      id: id,
      ref: containerRef,
      className: classNames(styles.container, className),
      style: {
        background: background,
        minHeight: minHeight,
        ...style,
      } as React.CSSProperties,
    },
    <div className={styles.wrapper}>{children}</div>
  );

export default Container;
