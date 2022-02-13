import Button, {
  ButtonComponentType,
  ButtonSizeType,
} from "../../components/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const components: ButtonComponentType[] = ["a", "button"];
const sizes: ButtonSizeType[] = ["small", "medium", "large"];
const filled = [false, true];
const disabled = [false, true];

export const AllButtons = () => (
  <div style={{ display: "grid", gap: "8px", placeItems: "flex-start" }}>
    {sizes.map((size) =>
      components.map((component) =>
        filled.map((filled) =>
          disabled.map((disabled) => (
            <div
              style={{
                display: "flex",
                gap: "8px",
                placeItems: "flex-start",
              }}
            >
              <Button
                component={component}
                size={size}
                filled={filled}
                disabled={disabled}
              >
                {filled && "filled"} {size} {component}
              </Button>
              <Button
                component={component}
                size={size}
                filled={filled}
                disabled={disabled}
                iconLeading="waving_hand"
              >
                {filled && "filled"} {size} {component}
              </Button>
              <Button
                component={component}
                size={size}
                filled={filled}
                disabled={disabled}
                iconTrailing="waving_hand"
              >
                {filled && "filled"} {size} {component}
              </Button>
            </div>
          ))
        )
      )
    )}
  </div>
);
