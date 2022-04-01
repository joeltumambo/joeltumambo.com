const makeEven = (n: number) => (n % 2 === 0 ? n : n + 1);

const setMetaHeight = () => {
  const metaViewport = document.querySelector("meta[name=viewport]");

  if (metaViewport) {
    metaViewport!.setAttribute(
      "content",
      `height=${makeEven(innerHeight)}, width=device-width, initial-scale=1.0`
    );
  }
};

export default setMetaHeight;
