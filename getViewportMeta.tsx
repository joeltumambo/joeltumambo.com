import evenify from "./utils/evenify";

export const DEFAULT_VIEWPORT_META = "width=device-width, initial-scale=1.0";

const getViewportMeta = (): string => {
  if (window.innerWidth < 600) {
    const evenHeight = evenify(window.innerHeight);
    const viewportMetaContent = `height=${evenHeight}px, width=device-width, initial-scale=1.0`;

    return viewportMetaContent;
  }

  return DEFAULT_VIEWPORT_META;
};

export default getViewportMeta;
