// src/components/Card.stories.jsx
import Button from "./Button";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
};

export const Default = () => (
  <Card className="max-w-sm p-6">
    <h2 className="text-xl font-bold mb-2">Card Title</h2>
    <p className="text-gray-700 mb-2">
            This is some static content for the card.
    </p>
    <footer className="text-sm text-gray-500 border-t border-gray-100 py-2"><Button>Click Me</Button></footer>
  </Card>
);
