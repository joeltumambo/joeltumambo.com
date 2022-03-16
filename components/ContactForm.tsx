import { useState, useEffect } from "react";
import TextField from "./TextField";
import Button from "./Button";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    console.log(values);
  }, [values]);

  const send = () => {
    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID ?? "",
        process.env.EMAILJS_TEMPLATE_ID ?? "",
        values,
        process.env.EMAILJS_USER_ID ?? ""
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const isValid = Object.values(values).every((value) => value);

  return (
    <form
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
      />
      <TextField
        id="email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        label="Email"
        placeholder="name@domain.com"
        helper="I need this so I can say hello back."
      />
      <TextField
        id="message"
        value={values.message}
        onChange={(e) => setValues({ ...values, message: e.target.value })}
        label="Message"
        placeholder="Say anything, really."
        multiline
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
          href={`mailto:joeltumambs@gmail.com?body=${encodeURI(
            values.message
          )}`}
          target="_blank"
        >
          Use email app
        </Button>
        <Button filled iconTrailing="send" onClick={send} disabled={!isValid}>
          Send
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
