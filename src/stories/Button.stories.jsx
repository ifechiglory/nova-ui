import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "danger"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { variant: "primary", size: "md", children: "Button" };

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "md",
  children: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "primary",
  size: "md",
  disabled: true,
  children: "Disabled",
};
