import Typography, { TypographyWeightType } from "../../components/Typography";

export default {
  title: "Components/Typography",
  component: Typography,
};

const sizes = [0, 1, 2, 18, 19, 20];
const weights: TypographyWeightType[] = [300, 400, 500, 700, 900];

export const AllTypography = () => (
  <div style={{ display: "grid", gap: "8px", placeItems: "flex-start" }}>
    {sizes.map((size) =>
      weights.map((weight) => (
        <Typography size={size} weight={weight}>
          size={size}, weight={weight}, Magna incididunt anim officia ipsum
          commodo aliqua.
        </Typography>
      ))
    )}
  </div>
);

export const Responsive = () => (
  <Typography
    size={{
      xs: -1,
      sm: 0,
      md: 1,
      lg: 2,
    }}
  >
    xs: -1, sm: 0, md: 1, lg: 2, Magna incididunt anim officia ipsum commodo
    aliqua.
  </Typography>
);
