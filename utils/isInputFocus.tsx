const isInputFocus = (): boolean =>
  document.activeElement?.tagName === "INPUT" ||
  document.activeElement?.tagName === "TEXTAREA";

export default isInputFocus;
