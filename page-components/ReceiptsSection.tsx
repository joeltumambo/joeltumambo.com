import React from "react";
import Button from "../components/Button";
import Grid from "../components/Grid";
import Typography from "../components/Typography";

const ReceiptsSection = () => (
  <Grid container>
    <Grid item container md={6}>
      <Typography
        size={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
        whiteSpace="pre"
        lineHeight={2}
      >
        {`Words are boring,\nand they can lie.\nReal work can't.`}
      </Typography>
      <Typography
        component="h2"
        size={{
          xs: 9,
          sm: 14,
          md: 19,
        }}
        weight={900}
        whiteSpace="pre"
      >
        {`Here are my\nreceipts\nprojects.`}
      </Typography>
    </Grid>
  </Grid>
);

export default ReceiptsSection;
