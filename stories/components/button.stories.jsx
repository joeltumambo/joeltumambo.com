import Button from "../../components/button";

export default {
  title: "Components/Button",
  component: Button,
};

const components = ["a", "button"];
const sizes = ["small", "medium", "large"];
const variants = ["text", "filled", "outlined"];

export const AllButtons = () => (
  <div
    style={{
      display: "grid",
      placeItems: "flex-start",
      gap: "8px",
    }}
  >
    {variants.map((variant) =>
      sizes.map((size) =>
        components.map((component) => (
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <Button component={component} size={size} variant={variant}>
              {size} {variant} {component}
            </Button>
            <Button
              component={component}
              size={size}
              variant={variant}
              iconLeading="waving_hand"
            >
              {size} {variant} {component}
            </Button>
            <Button
              component={component}
              size={size}
              variant={variant}
              iconTrailing="waving_hand"
            >
              {size} {variant} {component}
            </Button>
          </div>
        ))
      )
    )}
  </div>
);
