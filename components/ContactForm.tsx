import { useState, useEffect } from "react";
import TextField from "./TextField";
import Button from "./Button";
import Grid from "./Grid";
import setMetaHeight from "../utils/setMetaHeight";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => setMetaHeight(), []);

  const send = async () => {
    setLoading(true);
    (await import("@emailjs/browser"))
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        values,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? ""
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
        },
        () => {
          setLoading(false);
        }
      );
  };

  const isValid = Object.values(values).every((value) => value);
  let mailToLink = `mailto:${process.env.NEXT_PUBLIC_EMAIL ?? ""}`;

  if (values.message) {
    mailToLink += `?body=${encodeURI(values.message)}`;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Grid container spacing={3}>
        <Grid item sm={6} md={12}>
          <TextField
            id="name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            label="Name"
            placeholder="John"
            disabled={loading || success}
          />
        </Grid>
        <Grid item sm={6} md={12}>
          <TextField
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            label="Email"
            placeholder="name@domain.com"
            helper="I need this so I can say hello back."
            disabled={loading || success}
          />
        </Grid>
        <Grid item>
          <TextField
            id="message"
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
            label="Message"
            placeholder="Say anything, really."
            multiline
            disabled={loading || success}
          />
        </Grid>
        <Grid item>
          <Grid container placeContent="flex-end">
            <Grid item xs={true} sm={false}>
              <Button
                iconTrailing="launch"
                href={mailToLink}
                target="_blank"
                disabled={loading}
              >
                Use email app
              </Button>
            </Grid>
            <Grid item xs={true} sm={false}>
              <Button
                filled
                iconTrailing={"send"}
                onClick={send}
                disabled={!isValid || loading || success}
              >
                {loading ? "Sending" : success ? "Sent!" : "Send"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
