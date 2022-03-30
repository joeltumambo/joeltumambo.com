import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import TextField from "./TextField";
import Button from "./Button";
import Grid from "./Grid";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const send = () => {
    setLoading(true);
    emailjs
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

  return (
    <form
      style={{
        display: "grid",
        gap: "24px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <TextField
        id="name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        label="Name"
        placeholder="John"
        disabled={loading || success}
      />
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
      <TextField
        id="message"
        value={values.message}
        onChange={(e) => setValues({ ...values, message: e.target.value })}
        label="Message"
        placeholder="Say anything, really."
        multiline
        disabled={loading || success}
      />
      <Grid container placeContent="flex-end">
        <Grid item xs={6} sm={false}>
          <Button
            iconTrailing="launch"
            href={`mailto:${
              process.env.NEXT_PUBLIC_EMAIL ?? ""
            }?body=${encodeURI(values.message)}`}
            target="_blank"
            disabled={loading}
          >
            Use email app
          </Button>
        </Grid>
        <Grid item xs={6} sm={false}>
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
    </form>
  );
};

export default ContactForm;
