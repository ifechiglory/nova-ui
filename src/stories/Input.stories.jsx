import { useState } from "react";
import Input from "../components/Input";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => {
  const [val, setVal] = useState("");
  return (
    <Input {...args} value={val} onChange={(e) => setVal(e.target.value)} />
  );
};

export const Default = Template.bind({});
Default.args = { placeholder: "Enter text..." };

export const Disabled = Template.bind({});
Disabled.args = { placeholder: "Disabled", disabled: true };
