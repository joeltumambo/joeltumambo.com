import React from "react";
import Grid from "../components/Grid";
import Icon from "../components/Icon";
import Typography from "../components/Typography";

interface StatementProps {
  icon: string;
  title: string;
  body: string;
}

const Statement: React.FC<StatementProps> = ({ icon, title, body }) => (
  <Grid
    container
    spacing={{
      xs: 2,
      sm: 3,
    }}
  >
    <Grid item xs={false}>
      <div
        style={{
          background: "var(--brown-50)",
          display: "flex",
          placeItems: "center",
          placeContent: "center",
          borderRadius: "48px",
          height: "48px",
          width: "48px",
        }}
      >
        <Icon name={icon} color="var(--brown-200)" />
      </div>
    </Grid>
    <Grid item xs={true}>
      <Typography
        component="h3"
        size={{
          xs: 0,
          sm: 1,
          md: 2,
        }}
        weight={700}
        color="var(--brown-600)"
        gutter={0.5}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        size={{
          xs: 0,
          sm: 1,
          md: 2,
        }}
        lineHeight={2}
        gutter={0}
        color="var(--brown-600)"
      >
        {body}
      </Typography>
    </Grid>
  </Grid>
);

const statements: StatementProps[] = [
  {
    icon: "sentiment_very_satisfied",
    title: "UX",
    body: "User experience makes or breaks an app. We want users to stay and return.",
  },
  {
    icon: "code",
    title: "DX",
    body: "DX is developer experience. Happy developers produce quality work.",
  },
  {
    icon: "app_shortcut",
    title: "Product",
    body: `Great UX + DX = a product that users love to use and devs love to work on.`,
  },
];

const BeautySection = () => (
  <Grid container>
    <Grid item md={6}>
      <Typography
        size={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
        whiteSpace="pre"
        component="p"
        lineHeight={2}
        align={{ xs: "center", sm: "left" }}
      >
        {`I specialize in front-end\nand design systems.`}
      </Typography>
      <Typography
        component="h2"
        size={{
          xs: 9,
          sm: 14,
          md: 19,
        }}
        weight={900}
        whiteSpace={{
          xs: "normal",
          md: "pre",
        }}
        align={{ xs: "center", sm: "left" }}
      >
        {`What is\nbeautiful?`}
      </Typography>
    </Grid>
    <Grid item md={6}>
      <Grid container spacing={3}>
        {statements.map((statement) => (
          <Grid item key={statement.title}>
            <Statement {...statement} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default BeautySection;
