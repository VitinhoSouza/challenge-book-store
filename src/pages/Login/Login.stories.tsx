import { ComponentMeta, ComponentStory } from "@storybook/react";
import Login from "./Login";

export default {
  title: "Login Page",
  components: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = () => <Login />;

export const Primary = Template.bind({});
