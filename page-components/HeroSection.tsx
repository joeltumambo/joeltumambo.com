import React from "react";
import Button from "../components/Button";
import Grid from "../components/Grid";
import Typography from "../components/Typography";

const HeroSection = () => (
  <Grid container alignContent="center">
    <Grid item container direction="column" md={6}>
      <Typography
        size={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
        whiteSpace="pre"
        lineHeight={2}
      >
        {`Hello! My name's Joel,\na software engineer\nbased in Philippines.`}
      </Typography>
      <Typography
        component="h1"
        size={{
          xs: 10,
          sm: 15,
          md: 20,
        }}
        weight={900}
        whiteSpace="pre"
      >
        {`I help people build\nbeautiful apps with\nbeautiful code.`}
      </Typography>
      <div
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        <Button filled iconTrailing="waving_hand" size="large" href="#contact">
          Say hello!
        </Button>
        <Button iconTrailing="arrow_forward" size="large" href="#receipts">
          See receipts
        </Button>
      </div>
    </Grid>
  </Grid>
);

export default HeroSection;
