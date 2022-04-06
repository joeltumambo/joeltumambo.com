import Icon from "../../components/Icon";

export default {
  title: "Components/Icon",
  component: Icon,
};

export const Default = () => <Icon name="waving_hand" />;

export const Logo = () => (
  <Icon name="logo" size={20} color="var(--indigo-a400)" />
);
