import TextField from "../../components/TextField";

export default {
  title: "Components/TextField",
  component: TextField,
};

export const AllTextFields = () => (
  <div
    style={{
      display: "grid",
      gap: "24px",
    }}
  >
    <TextField label="Input" placeholder="Placeholder" />
    <TextField
      label="Input"
      placeholder="Placeholder"
      helper="Helper text"
    />
    <TextField
      label="Input"
      placeholder="Placeholder"
      helper="Error text"
      error
    />
    <TextField label="Textarea" placeholder="Placeholder text" multiline />
    <TextField
      label="Textarea"
      placeholder="Placeholder text"
      multiline
      helper="Helper text"
    />
    <TextField
      label="Textarea"
      placeholder="Placeholder text"
      multiline
      helper="Error text"
      error
    />
  </div>
);
