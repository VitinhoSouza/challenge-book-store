import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";

export default {
  title: "Login Page",
  components: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = () => (
  <Router>
    <Login />
  </Router>
);

export const Primary = Template.bind({});
