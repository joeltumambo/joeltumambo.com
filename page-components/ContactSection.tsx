import React from "react";
import ContactForm from "../components/ContactForm";
import Grid from "../components/Grid";
import Typography from "../components/Typography";

const ContactSection = () => (
  <Grid container alignContent="center">
    <Grid item md={6}>
      <Typography
        component="h2"
        size={{
          xs: 9,
          sm: 14,
          md: 19,
        }}
        weight={900}
        whiteSpace="pre"
        gutter={0.5}
      >
        {`Ready to build\nbeautiful?`}
      </Typography>
      <Typography
        size={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
        whiteSpace="pre"
        lineHeight={2}
      >
        {`Say hello and let's get started.`}
      </Typography>
    </Grid>
    <Grid item md={6}>
      <ContactForm />
    </Grid>
  </Grid>
);

export default ContactSection;
