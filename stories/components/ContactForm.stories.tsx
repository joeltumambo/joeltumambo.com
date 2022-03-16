import ContactForm from "../../components/ContactForm";

export default {
  title: "Components/ContactForm",
  component: ContactForm,
};

export const Default = () => (
  <div
    style={{
      display: "flex",
    }}
  >
    <ContactForm />
    <code
      style={{
        flex: 1,
        marginLeft: "16px",
        display: "block",
        whiteSpace: "pre-wrap",
      }}
    >
      {JSON.stringify({}, null, 2)}
    </code>
  </div>
);
