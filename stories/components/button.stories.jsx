import Button from "../../components/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const components = ["a", "button"];
const sizes = ["small", "medium", "large"];
const filled = [false, true];

export const AllButtons = () => (
  <div style={{ display: "grid", gap: "8px", placeItems: "flex-start" }}>
    {sizes.map((size) =>
      components.map((component) =>
        filled.map((filled) => (
          <div
            style={{
              display: "flex",
              gap: "8px",
              placeItems: "flex-start",
            }}
          >
            <Button component={component} size={size} filled={filled}>
              {filled && 'filled'} {size} {component} 
            </Button>
            <Button
              component={component}
              size={size}
              filled={filled}
              iconLeading="waving_hand"
            >
              {filled && 'filled'} {size} {component}
            </Button>
            <Button
              component={component}
              size={size}
              filled={filled}
              iconTrailing="waving_hand"
            >
              {filled && 'filled'} {size} {component}
            </Button>
          </div>
        ))
      )
    )}
  </div>
);
