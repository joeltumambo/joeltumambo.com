import { useState } from "react";
import { useEventListener } from "usehooks-ts";
import evenify from "../utils/evenify";
import Button from "./Button";
import Container from "./Container";
import Icon from "./Icon";

const Header = () => {
  const [opacity, setOpacity] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [top, setTop] = useState({
    value: 0,
    unit: "",
  });

  const onScroll = () => {
    const element = document.documentElement;
    const scrollTop = element.scrollTop;
    const evenRelativeHeight = evenify(Math.round(element.clientHeight * 0.1));
    const height = Math.max(evenRelativeHeight, 52);
    const maxTop = height === 52 ? -52 : -10;
    const deltaFactor = height === 52 ? 1 : 0.1;
    const scrollDelta = (lastScrollTop - scrollTop) * deltaFactor;
    const newTop = top.value + scrollDelta;
    const isUp = scrollDelta < 0;
    const value = isUp ? Math.max(newTop, maxTop) : Math.min(newTop, 0);
    const unit = height === 52 ? "px" : "vh";

    setLastScrollTop(scrollTop);
    setTop({
      value: value,
      unit: unit,
    });
    setOpacity(Math.min(1 - (height - scrollTop) / height, 1));
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
      }}
    >
      <div
        style={{
          display: "flex",
          placeContent: "space-between",
        }}
      >
        <Icon name="logo" size={10} color="var(--indigo-a400)" />
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
