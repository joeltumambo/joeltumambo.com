import { useState } from "react";
import { useEventListener } from "usehooks-ts";
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
  const [animate, setAnimate] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
 
  const onScrollStop = () => {
    setAnimate(true);
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
    setAnimate(false);
    if (timer) {
      clearTimeout(timer);
    }
    if (lastScrollTop > height) {
      setTimer(setTimeout(onScrollStop, 100));
    }
  };

  useEventListener("scroll", onScroll);

  return (
    <Container
      component="header"
      minHeight="52px"
      background={`rgba(250, 250, 250, ${opacity - 0.1})`}
      style={{
        overflow: "hidden",
        zIndex: 100,
        height: "10vh",
        position: "sticky",
        top: `${top.value}${top.unit}`,
        boxShadow: `0 1px 0 0 rgba(0, 0, 0, ${opacity / 10})`,
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        ...(animate && {
          transition: "top 250ms var(--easing-standard)",
        }),
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
