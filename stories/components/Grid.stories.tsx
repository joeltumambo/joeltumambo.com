import Grid from "../../components/Grid";

export default {
  title: "Components/Grid",
  component: Grid,
};

const Cell: React.FC = ({ children }) => (
  <div
    style={{
      background: "pink",
      display: "flex",
      placeContent: "center",
      padding: "8px",
    }}
  >
    {children}
  </div>
);

export const Default = () => (
  <Grid container spacing={1}>
    <Grid item sm={6}>
      <Cell>sm=6</Cell>
    </Grid>
    <Grid item sm={6}>
      <Cell>sm=6</Cell>
    </Grid>
    <Grid item>
      <Cell>default</Cell>
    </Grid>
  </Grid>
);
