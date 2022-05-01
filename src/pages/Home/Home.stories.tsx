import { ComponentMeta, ComponentStory } from "@storybook/react";
import Home from "./Home";

export default {
  title: "Home Page",
  components: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const Primary = Template.bind({});
