import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text, IProps } from "./index";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args: IProps) => (
  <Text {...args} > Text text </Text>
);

const Default = Template.bind({});

const HeadingLarge = Template.bind({});
HeadingLarge.args = {
  tag: "h1",
  typo: "heading-lg",
};

const ParagraphMedium = Template.bind({});
ParagraphMedium.args = {
  tag: "p",
  typo: "paragraph-md",
};

const Label = Template.bind({});
Label.args = {
  tag: "label",
  content: "I am a label",
  typo: "label",
};

const Guidance = Template.bind({});
Guidance.args = {
  tag: "span",
  content: "I am a guidance",
  typo: "guidance",
};


export { Default, HeadingLarge, ParagraphMedium, Label, Guidance };
