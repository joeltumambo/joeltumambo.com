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

export const Demo = () => (
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

export const NestedGrids = () => (
  <Grid container>
    <Grid item sm={6}>
      <Cell>sm=6</Cell>
    </Grid>
    <Grid item sm={6}>
      <Grid container spacing={2}>
        <Grid item>
          <Cell>sm=6</Cell>
        </Grid>
        <Grid item sm={6}>
          <Cell>sm=6</Cell>
        </Grid>
        <Grid item sm={6}>
          <Cell>sm=6</Cell>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export const NestedGrids1 = () => (
  <Grid container spacing={3}>
    <Grid item sm={6}>
      <Grid container spacing={2}>
        <Grid item>
          <Cell>1</Cell>
        </Grid>
        <Grid item>
          <Cell>1</Cell>
        </Grid>
      </Grid>
    </Grid>
    <Grid item sm={6}>
      <Grid container spacing={2}>
        <Grid item>
          <Cell>1</Cell>
        </Grid>
        <Grid item>
          <Cell>1</Cell>
        </Grid>
        <Grid item>
          <Cell>1</Cell>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
