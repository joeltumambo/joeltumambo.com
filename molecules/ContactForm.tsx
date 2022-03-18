import { useState, useEffect } from "react";
import TextField from "../atoms/TextField";
import Button from "../atoms/Button";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    console.log(values);
  }, [values]);

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
        (result) => {
          setSuccess(true);
          setLoading(false);
          console.log(result.text);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };

  const isValid = Object.values(values).every((value) => value);

  return (
    <div
      style={{
        display: "grid",
        gap: "24px",
        flex: 1,
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
      <div
        style={{
          display: "flex",
          gap: "8px",
          placeContent: "end",
        }}
      >
        <Button
          iconTrailing="launch"
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL ?? ""}?body=${encodeURI(
            values.message
          )}`}
          target="_blank"
          disabled={loading}
        >
          Use email app
        </Button>
        <Button
          filled
          iconTrailing={"send"}
          onClick={send}
          disabled={!isValid || loading || success}
        >
          {loading ? "Sending" : success ? "Sent!" : "Send"}
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
