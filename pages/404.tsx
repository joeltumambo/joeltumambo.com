import Button from "../components/Button";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Typography from "../components/Typography";

const Custom404 = () => (
  <Page title="Page Not Found">
    <Container minHeight="90vh">
      <Grid container>
        <Grid item>
          <Typography
            component="h1"
            size={{
              xs: 10,
              sm: 15,
              md: 20,
            }}
            weight={900}
            gutter={0.5}
          >
            Sorry, I can&apos;t find that page.
          </Typography>
          <Typography
            size={{
              xs: 1,
              sm: 2,
              md: 3,
            }}
            lineHeight={2}
          >
            Please check if there&apos;s a typo in the URL.
          </Typography>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item xs={true} sm={false}>
              <Button
                filled
                size="large"
                iconLeading="arrow_back"
                link={{
                  href: "/",
                }}
              >
                Go home
              </Button>
            </Grid>
            <Grid item xs={true} sm={false}>
              <Button
                size="large"
                link={{
                  href: "/#contact",
                }}
              >
                or, tell me about it.
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Page>
);

export default Custom404;
