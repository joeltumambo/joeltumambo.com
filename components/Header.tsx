import { useEffect, useState } from "react";
import { useEventListener } from "usehooks-ts";
import Button from "./Button";
import Container from "./Container";
import Icon from "./Icon";

const Header = () => {
  const [opacity, setOpacity] = useState(0);

  const onScroll = () => {
    const element = document.scrollingElement;

    if (element) {
      const scrollTop = element.scrollTop;
      const height = Math.min(element.scrollHeight * 0.1, 52);

      setOpacity(Math.min(1 - (height - scrollTop) / height, 1));
    }
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
        top: 0,
        boxShadow: `0 1px 0 0 rgba(0, 0, 0, ${opacity / 10})`,
        backdropFilter: "blur(4px)",
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
              href: "#contact",
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
