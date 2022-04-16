import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useEventListener, useWindowSize } from "usehooks-ts";
import styles from "../styles/Header.module.css";
import evenify from "../utils/evenify";
import Button from "./Button";
import Container from "./Container";
import Icon from "./Icon";

const Header = () => {
  const { height: windowHeight } = useWindowSize();
  const [height, setHeight] = useState(52);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [top, setTop] = useState(0);
  const [animated, setAnimated] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const maxTop = height * -1;

  const onScrollStop = () => {
    setAnimated(true);
    if (top * -1 >= height / 2) {
      setTop(maxTop);
    } else {
      setTop(0);
    }
  };

  const onScroll = () => {
    const element = document.documentElement;
    const scrollTop = element.scrollTop;
    const scrollDelta = lastScrollTop - scrollTop;
    const newOpacity = Math.min(1 - (height - scrollTop) / height, 1);
    const newTop = top + scrollDelta;
    const isUp = scrollDelta < 0;
    const value = isUp ? Math.max(newTop, maxTop) : Math.min(newTop, 0);

    setTop(value);
    setOpacity(newOpacity);
    setAnimated(false);
    setLastScrollTop(scrollTop);

    if (lastScrollTop > height && !touching) {
      if (timer) {
        clearTimeout(timer);
      }
      setTimer(setTimeout(onScrollStop, 100));
    }
  };

  useEffect(() => {
    const element = document.documentElement;
    const relativeHeight = evenify(Math.round(element.clientHeight * 0.1));
    const newHeight = Math.max(relativeHeight, 52);
    setHeight(newHeight);
  }, []);

  useEffect(() => {
    if (!touching) {
      onScrollStop();
    }
  }, [touching]);

  useEventListener("scroll", onScroll);
  useEventListener("touchstart", () => {
    setTouching(true);
  });
  useEventListener("touchend", () => {
    setTouching(false);
  });
  useEventListener("focusin", () => {
    if (
      document.activeElement!.tagName === "INPUT" ||
      document.activeElement!.tagName === "TEXTAREA"
    ) {
      setFocused(true);
    }
  });
  useEventListener("focusout", () => {
    setFocused(false);
  });

  return (
    <Container
      className={classNames(styles.header, animated && styles.animated)}
      component="header"
      style={{
        ...({
          "--top": `${focused ? maxTop : top}px`,
          "--opacity": opacity,
          height: `${height}px`,
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
              href: "/#contact",
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
