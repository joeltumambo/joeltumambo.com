import React from "react";
import Grid from "../components/Grid";
import Typography from "../components/Typography";

interface StatementProps {
  icon: string;
  title: string;
  body: string;
}

const Statement: React.FC<StatementProps> = ({ icon, title, body }) => (
  <div
    style={{
      display: "flex",
      gap: "16px",
    }}
  >
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
    <div
      style={{
        display: "grid",
        flex: 1,
      }}
    >
      <Typography
        component="h3"
        size={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
        weight={700}
        whiteSpace="pre"
        gutter={0.5}
      >
        {title}
      </Typography>
      <Typography
        size={{
          xs: 0,
          sm: 1,
          md: 2,
        }}
        lineHeight={2}
        gutter={2}
      >
        {body}
      </Typography>
    </div>
  </div>
);

const statements: StatementProps[] = [
  {
    icon: "sentiment_very_satisfied",
    title: "Beautiful UX",
    body: "Good user-experience makes the user stay and return. When they do, we succeed.",
  },
  {
    icon: "code",
    title: "Beautiful DX",
    body: "DX is developer-experience. Happy devs are productive. When we work fast, we beat the competitor.",
  },
  {
    icon: "app_shortcut",
    title: "Beautiful Product",
    body: "Adding the two gives us a product that users love to use and devs love to work on.",
  },
];

const BeautySection = () => (
  <Grid container alignContent="center">
    <Grid item container direction="column" md={6}>
      <Typography
        component="h2"
        size={{
          xs: 9,
          sm: 14,
          md: 19,
        }}
        weight={900}
        whiteSpace="pre"
        align={{ xs: "center", md: "left" }}
      >
        What is beautiful?
      </Typography>
    </Grid>
    <Grid item container direction="column" md={6}>
      {statements.map((statement) => (
        <Statement key={statement.title} {...statement} />
      ))}
    </Grid>
  </Grid>
);

export default BeautySection;
