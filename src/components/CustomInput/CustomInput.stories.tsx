import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomInput from "./CustomInput";

export default {
  title: "CustomInput Component",
  components: CustomInput,
} as ComponentMeta<typeof CustomInput>;

const Primary: ComponentStory<typeof CustomInput> = () => (
  <CustomInput type="email" handleEmail={console.log} />
);

const Secondary: ComponentStory<typeof CustomInput> = () => (
  <CustomInput
    type="password"
    tryLogin={console.log}
    handlePassword={console.log}
  />
);

export const Email = Primary.bind({});
export const Senha = Secondary.bind({});
