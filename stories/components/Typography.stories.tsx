import Typography, { TypographyWeightType } from "../../components/Typography";

export default {
  title: "Components/Typography",
  component: Typography,
};

const sizes = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const weights: TypographyWeightType[] = [300, 400, 500, 700, 900];
// const disabled = [false, true];

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
