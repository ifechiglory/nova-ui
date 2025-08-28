import Badge from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "success", "danger"],
      },
    },
    children: { control: "text" },
  },
};

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "Primary Badge", variant: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { children: "Secondary Badge", variant: "secondary" };

export const Success = Template.bind({});
Success.args = { children: "Success Badge", variant: "success" };

export const Danger = Template.bind({});
Danger.args = { children: 'Danger Badge', variant: 'danger' };