import classNames from "classnames";
import React, { useState } from "react";
import { useEventListener } from "usehooks-ts";
import styles from "../styles/Header.module.css";
import evenify from "../utils/evenify";
import Button from "./Button";
import Container from "./Container";
import Icon from "./Icon";

interface TopProps {
  value: number;
  unit: "px" | "vh";
}

const Header = () => {
  const [opacity, setOpacity] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const heightMap = {
    px: 52,
    vh: 10,
  };
  const [top, setTop] = useState<TopProps>({
    value: 0,
    unit: "px",
  });
  const [animated, setAnimated] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const onScrollStop = () => {
    setAnimated(true);
    if (top.value * -1 >= heightMap[top.unit] / 2) {
      setTop({
        value: heightMap[top.unit] * -1,
        unit: top.unit,
      });
    } else {
      setTop({
        value: 0,
        unit: top.unit,
      });
    }
  };

  const onScroll = () => {
    const element = document.documentElement;
    const scrollTop = element.scrollTop;
    const evenRelativeHeight = evenify(Math.round(element.clientHeight * 0.1));
    const height = Math.max(evenRelativeHeight, heightMap.px);
    const isPx = height === heightMap.px;
    const unit = isPx ? "px" : "vh";
    const maxTop = heightMap[unit] * -1;
    const deltaFactor = height === heightMap.px ? 1 : 0.1;
    const scrollDelta = (lastScrollTop - scrollTop) * deltaFactor;
    const newTop = top.value + scrollDelta;
    const isUp = scrollDelta < 0;
    const value = isUp ? Math.max(newTop, maxTop) : Math.min(newTop, 0);

    setLastScrollTop(scrollTop);
    setTop({
      value: value,
      unit: unit,
    });
    setOpacity(Math.min(1 - (height - scrollTop) / height, 1));
    setAnimated(false);

    if (lastScrollTop > height) {
      if (timer) {
        clearTimeout(timer);
      }
      setTimer(setTimeout(onScrollStop, 100));
    }
  };

  useEventListener("scroll", onScroll);

  return (
    <Container
      className={classNames(styles.header, animated && styles.animated)}
      component="header"
      style={{
        ...({
          "--top": `${top.value}${top.unit}`,
          "--opacity": opacity,
        } as React.CSSProperties),
      }}
    >
      <div
        style={{
          display: "flex",
          placeContent: "space-between",
        }}
      >
        <Icon name="logo" size={10} color="var(--indigo-a700)" />
        <nav>
          <Button
            size="small"
            filled
            link={{
              href: "#contact",
            }}
          >
            Say hello!
          </Button>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
