import React from "react";
import Grid from "../components/Grid";
import Typography from "../components/Typography";

interface StatementProps {
  icon: string;
  title: string;
  body: string;
}

const Statement: React.FC<StatementProps> = ({ icon, title, body }) => (
  <Grid container spacing={0}>
    <Grid item xs={2}>
      <div
        style={{
          fontSize: "24px",
          background: "#efebe9",
          color: "#bcaaa4",
          display: "grid",
          placeItems: "center",
          borderRadius: "48px",
          height: "48px",
          width: "48px",
        }}
      >
        <span className="material-icons-round">{icon}</span>
      </div>
    </Grid>
    <Grid item xs={10}>
      <Typography
        component="h3"
        size={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
        weight={700}
        whiteSpace="pre"
        color="#6d4c41"
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
        gutter={2}
        color="#6d4c41"
      >
        {body}
      </Typography>
    </Grid>
  </Grid>
);

const statements: StatementProps[] = [
  {
    icon: "sentiment_very_satisfied",
    title: "Beautiful UX",
    body: "User-experience makes or breaks an app. We want our users to stay and return.",
  },
  {
    icon: "code",
    title: "Beautiful DX",
    body: "DX is dev-experience. Happy devs are productive. When we work fast, users are happy.",
  },
  {
    icon: "app_shortcut",
    title: "Beautiful Product",
    body: `Adding the two gives us a product that users love to use and devs love to work on.`,
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
        {`I specialize in beautiful\nfront-end and design systems.`}
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
      {statements.map((statement) => (
        <Statement key={statement.title} {...statement} />
      ))}
    </Grid>
  </Grid>
);

export default BeautySection;
