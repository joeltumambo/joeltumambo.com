import React from "react";
import Button from "../components/Button";
import Grid from "../components/Grid";
import Typography from "../components/Typography";

const HeroSection = () => (
  <Grid container>
    <Grid item md={6}>
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
        whiteSpace={{
          xs: "normal",
          sm: "pre",
        }}
      >
        {`I help people build\nbeautiful apps with\nbeautiful code.`}
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Button
            filled
            iconTrailing="waving_hand"
            size="large"
            href="#contact"
          >
            Say hello!
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button iconTrailing="arrow_forward" size="large" href="#receipts">
            See receipts
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default HeroSection;
