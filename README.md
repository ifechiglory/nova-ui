# Storybook Design System

A reusable component library built with React and Tailwind CSS, documented with Storybook. This project demonstrates component-driven development, making it easier to maintain, reuse, and scale UI elements across projects.

## Features

- Reusable UI Components: Button, Input, Card, Badge, etc.

- Storybook Integration: Interactive component documentation.

- Tailwind CSS: Consistent, responsive styling.

- Component Playground: Test different props live in Storybook.

- Prop-driven Components: One component, multiple variations.

- Optional Addons: Accessibility, controls, actions, and more.

## Project Structure

```txt

storybook-design-system/\
├─ src/\
│ ├─ components/\
│ │ ├─ Button.jsx\
│ │ ├─ Button.stories.jsx\
│ │ ├─ Card.jsx\
│ │ ├─ Card.stories.jsx\
│ │ ├─ Badge.jsx\
│ │ └─ Badge.stories.jsx\
├─ .storybook/\
│ ├─ main.js\
│ └─ preview.js\
├─ tailwind.config.js\
├─ package.json\
└─ README.md

```

---

## Tech Stack

- React -- Component-based architecture

- Tailwind CSS -- Utility-first styling

- Storybook -- Component playground and documentation

- Optional: Jest + React Testing Library for unit testing

## Installation

### Clone the repo

```bash
git clone <your-repo-url>\
cd storybook-design-system\
npm install
```

---

### Install Storybook (if not already installed)

npx storybook@latest init

## Usage

Run Storybook:

npm run storybook

Open the URL shown in the terminal (usually <http://localhost:6006>) to interact with your component library.

## Run App

If you also want to see components in a standalone React app:

npm run dev

## Adding New Components

- Create a new component in src/components/, e.g., Input.jsx.

- Add a Storybook file Input.stories.jsx.

- Define stories with different props:

```bash
import Input from './Input';

export default {\
title: 'Components/Input',\
component: Input,\
};

export const Default = () => <Input placeholder="Type here..." />;\
export const Disabled = () => <Input placeholder="Can't type" disabled />;
```

---

- Start Storybook to view and test your component.

## Best Practices

- Keep components small and focused.

- Make props configurable for reusability.

- Use Storybook Controls for interactive testing.

- Keep Storybook .stories.jsx files in the same folder as the component for easier maintenance.

## Deployment

Build Storybook for deployment:

```bash
npm run build-storybook
```

---

Deploy storybook-static/ folder to Vercel, Netlify, or any static hosting.

## Learning Outcomes

- Build scalable, reusable components.

- Understand component-driven development.

- Document components for team usage.

- Gain hands-on experience with Storybook + Tailwind.

- Learn to structure a design system professionally.

## References

- [Storybook Docs](https://storybook.js.org/docs/react/get-started/introduction)

- [Tailwind CSS](https://tailwindcss.com/)

- [React Documentation](https://reactjs.org/docs/getting-started.html)

## Notes

- .storybook/ folder should be pushed to Git to keep configuration consistent.

- Avoid committing storybook-static/ (built Storybook) --- can be regenerated anytime.

- Keep all component stories up-to-date with component changes.
