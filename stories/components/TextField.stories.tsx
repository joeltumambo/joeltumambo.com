import { useEffect, useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

export default {
  title: "Components/TextField",
  component: TextField,
};

export const AllTextFields = () => {
  const [values, setValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    textarea1: "",
    textarea2: "",
    textarea3: "",
  });

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "24px",
          flex: 1,
        }}
      >
        <TextField
          id="input1"
          value={values.input1}
          onChange={(e) => setValues({ ...values, input1: e.target.value })}
          label="Input 1"
          placeholder="Placeholder"
        />
        <TextField
          id="input2"
          value={values.input2}
          onChange={(e) => setValues({ ...values, input2: e.target.value })}
          label="Input 2"
          placeholder="Placeholder"
          helper="Helper text"
        />
        <TextField
          id="input3"
          value={values.input3}
          onChange={(e) => setValues({ ...values, input3: e.target.value })}
          label="Input 3"
          placeholder="Placeholder"
          helper="Error text"
          error
        />
        <TextField
          id="textarea1"
          value={values.textarea1}
          onChange={(e) => setValues({ ...values, textarea1: e.target.value })}
          label="Textarea 1"
          placeholder="Placeholder text"
          multiline
        />
        <TextField
          id="textarea2"
          value={values.textarea2}
          onChange={(e) => setValues({ ...values, textarea2: e.target.value })}
          label="Textarea 2"
          placeholder="Placeholder text"
          multiline
          helper="Helper text"
        />
        <TextField
          id="textarea3"
          value={values.textarea3}
          onChange={(e) => setValues({ ...values, textarea3: e.target.value })}
          label="Textarea 3"
          placeholder="Placeholder text"
          multiline
          helper="Error text"
          error
        />
      </div>
      <code
        style={{
          flex: 1,
          marginLeft: "16px",
          display: "block",
          whiteSpace: "pre-wrap",
        }}
      >
        {JSON.stringify({ values }, null, 2)}
      </code>
    </div>
  );
};

export const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
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
            iconTrailing="north_east"
            href={`mailto:joeltumambs@gmail.com?body=${encodeURI(values.message)}`}
            target="_blank"
          >
            Use email app
          </Button>
          <Button filled iconTrailing="send">
            Send
          </Button>
        </div>
      </div>
      <code
        style={{
          flex: 1,
          marginLeft: "16px",
          display: "block",
          whiteSpace: "pre-wrap",
        }}
      >
        {JSON.stringify({ values }, null, 2)}
      </code>
    </div>
  );
};
