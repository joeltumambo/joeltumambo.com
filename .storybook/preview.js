import "../styles/globals.css";

import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const materialViewports = {
  xs: {
    name: "xs",
    styles: {
      width: "320px",
      height: "100%",
    },
  },
  sm: {
    name: "sm",
    styles: {
      width: "600px",
      height: "100%",
    },
  },
  md: {
    name: "md",
    styles: {
      width: "1240px",
      height: "100%",
    },
  },
  lg: {
    name: "lg",
    styles: {
      width: "1440px",
      height: "100%",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "grey",
    values: [
      {
        name: "brown",
        value: "var(--brown-50)",
      },
      {
        name: "grey",
        value: "var(--grey-50)",
      },
      {
        name: "indigo",
        value: "var(--indigo-50)",
      },
    ],
  },
  viewport: { viewports: materialViewports },
  layout: "fullscreen",
};
