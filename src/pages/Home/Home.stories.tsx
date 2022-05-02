import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

export default {
  title: "Home Page",
  components: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => (
  <Router>
    <Home />
  </Router>
);

export const Primary = Template.bind({});
