import Button, {
  ButtonComponentType,
  ButtonSizeType,
} from "../../components/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const components: ButtonComponentType[] = ["a", "button"];
const sizes: ButtonSizeType[] = ["small", "default", "large"];
const filled = [false, true];
const disabled = [false, true];

export const AllButtons = () => (
  <div style={{ display: "grid", gap: "8px", placeItems: "flex-start" }}>
    {sizes.map((size) =>
      components.map((component) =>
        filled.map((filled) =>
          disabled.map((disabled) => {
            const buttonText = `${filled ? "filled" : ""} ${size} ${component}`;
            const onClick = () => console.log(`${buttonText} clicked!`);

            return (
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
                  onClick={onClick}
                >
                  {buttonText}
                </Button>
                <Button
                  component={component}
                  size={size}
                  filled={filled}
                  disabled={disabled}
                  iconLeading="waving_hand"
                  onClick={onClick}
                >
                  {buttonText}
                </Button>
                <Button
                  component={component}
                  size={size}
                  filled={filled}
                  disabled={disabled}
                  iconTrailing="waving_hand"
                  onClick={onClick}
                >
                  {buttonText}
                </Button>
              </div>
            );
          })
        )
      )
    )}
  </div>
);
