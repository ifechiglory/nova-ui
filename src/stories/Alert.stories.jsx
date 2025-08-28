import Alert from "../components/Alert";
import { useState } from "react";

export default {
  title: "Components/Alert",
  component: Alert,
};

export const Success = () => (
  <Alert type="success" message="This is a success message!" />
);
export const Error = () => (
  <Alert type="error" message="This is an error message!" />
);
export const Dismissible = () => {
  const [visible, setVisible] = useState(true);
  return visible ? (
    <Alert
      type="info"
      message="You can dismiss me!"
      onClose={() => setVisible(false)}
    />
  ) : null;
};
