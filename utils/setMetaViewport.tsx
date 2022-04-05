import evenify from "./evenify";

const setMetaViewport = () => {
  if (window.innerWidth < 600) {
    const metaViewport = document.querySelector("meta[name=viewport]");
    const evenHeight = evenify(window.innerHeight);
    const content = `height=${evenHeight}px, width=device-width, initial-scale=1.0`;
    metaViewport!.setAttribute("content", content);
  }
};

export default setMetaViewport;
