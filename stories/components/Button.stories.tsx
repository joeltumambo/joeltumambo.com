import { LinkProps } from "next/link";
import Button, {
  ButtonLinkType,
  ButtonSizeType,
} from "../../components/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const links: Array<ButtonLinkType | undefined> = [
  undefined,
  { href: "/" },
  { href: "https://www.joeltumambo.com/", external: true },
];
const sizes: ButtonSizeType[] = ["small", "default", "large"];
const filled = [false, true];
const disabled = [false, true];

export const AllButtons = () => (
  <div
    style={{
      display: "flex",
      gap: "8px",
      flexDirection: "column",
    }}
  >
    {sizes.map((size) =>
      filled.map((filled) =>
        disabled.map((disabled) =>
          links.map((link) => {
            const buttonText = [
              `${disabled ? "disabled" : ""}`,
              size,
              `${filled ? "filled" : ""}`,
              `${link ? (link.external ? "external link" : "link") : "button"}`,
            ]
              .filter((text) => text !== "")
              .join(" ");
            const onClick = link
              ? undefined
              : () => console.log(`${buttonText} clicked!`);

            return (
              <div
                key={buttonText}
                style={{
                  display: "flex",
                  gap: "8px",
                }}
              >
                <Button
                  size={size}
                  filled={filled}
                  disabled={disabled}
                  onClick={onClick}
                  link={link}
                >
                  {buttonText}
                </Button>
                <Button
                  size={size}
                  filled={filled}
                  disabled={disabled}
                  iconLeading="waving_hand"
                  onClick={onClick}
                  link={link}
                >
                  {buttonText}
                </Button>
                <Button
                  size={size}
                  filled={filled}
                  disabled={disabled}
                  iconTrailing="waving_hand"
                  onClick={onClick}
                  link={link}
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
