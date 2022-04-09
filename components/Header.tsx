import { useState } from "react";
import { useEventListener } from "usehooks-ts";
import evenify from "../utils/evenify";
import Button from "./Button";
import Container from "./Container";
import Icon from "./Icon";

const Header = () => {
  const [opacity, setOpacity] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [top, setTop] = useState(0);

  const onScroll = () => {
    const element = document.documentElement;
    const scrollTop = element.scrollTop;
    const evenRelativeHeight = evenify(Math.round(element.clientHeight * 0.1));
    const height = Math.max(evenRelativeHeight, 52);
    const scrollDelta = (lastScrollTop - scrollTop) * 0.1;

    setLastScrollTop(scrollTop);

    if (scrollDelta < 0) {
      setTop(Math.max(top + scrollDelta, -10));
    } else {
      setTop(Math.min(top + scrollDelta, 0));
    }
    setOpacity(Math.min(1 - (height - scrollTop) / height, 1));
  };

  useEventListener("scroll", onScroll);

  return (
    <Container
      component="header"
      minHeight="52px"
      background={`rgba(250, 250, 250, ${opacity - 0.2})`}
      style={{
        overflow: "hidden",
        zIndex: 100,
        height: "10vh",
        position: "sticky",
        top: `${top}vh`,
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
        <div>
          <Button
            size="small"
            filled
            link={{
              href: "/#contact",
            }}
          >
            Say hello!
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
