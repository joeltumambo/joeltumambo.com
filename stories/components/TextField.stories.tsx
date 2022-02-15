import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import TextField from "../../components/TextField";

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
        display: "grid",
        gap: "24px",
      }}
    >
      <TextField
        id="input1"
        value={values.input1}
        onChange={(e) => setValues({ ...values, input1: e.target.value })}
        label="Input"
        placeholder="Placeholder"
      />
      <TextField
        id="input2"
        value={values.input2}
        onChange={(e) => setValues({ ...values, input2: e.target.value })}
        label="Input"
        placeholder="Placeholder"
        helper="Helper text"
      />
      <TextField
        id="input3"
        value={values.input3}
        onChange={(e) => setValues({ ...values, input3: e.target.value })}
        label="Input"
        placeholder="Placeholder"
        helper="Error text"
        error
      />
      <TextField
        id="textarea1"
        value={values.textarea1}
        onChange={(e) => setValues({ ...values, textarea1: e.target.value })}
        label="Textarea"
        placeholder="Placeholder text"
        multiline
      />
      <TextField
        id="textarea2"
        value={values.textarea2}
        onChange={(e) => setValues({ ...values, textarea2: e.target.value })}
        label="Textarea"
        placeholder="Placeholder text"
        multiline
        helper="Helper text"
      />
      <TextField
        id="textarea3"
        value={values.textarea3}
        onChange={(e) => setValues({ ...values, textarea3: e.target.value })}
        label="Textarea"
        placeholder="Placeholder text"
        multiline
        helper="Error text"
        error
      />
    </div>
  );
};
