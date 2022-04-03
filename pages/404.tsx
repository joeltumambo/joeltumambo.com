import Link from "next/link";
import Button from "../components/Button";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Typography from "../components/Typography";

const Custom404 = () => (
  <Page title="Joel - Page Not Found">
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
            Sorry, I can't find that page
          </Typography>
          <Typography
            size={{
              xs: 1,
              sm: 2,
              md: 3,
            }}
            lineHeight={2}
          >
            Please check if there's a typo in the URL.
          </Typography>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item xs={true} sm={false}>
              <Link href="/" passHref>
                <Button filled size="large" iconLeading="arrow_back">
                  Go home
                </Button>
              </Link>
            </Grid>
            <Grid item xs={true} sm={false}>
              <Link href="/#contact" passHref>
                <Button size="large">or, tell me about it.</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Page>
);

export default Custom404;
