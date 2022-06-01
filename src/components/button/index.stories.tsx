import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Button, IProps } from "./index"

export default {
    title: "Button",
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: IProps) => <Button {...args} />

const Default = Template.bind({})

const Light = Template.bind({})
Light.args = {
  color: "black",
  label: "Black",
  bg: "light",
}

const Dark = Template.bind({})
Dark.args = {
    color: "white",
    label: "White",
    bg: "dark",
}

const FitContent = Template.bind({})
FitContent.args = {
    color: "white",
    label: "White",
    fullWidth: false,
    bg: "dark",
}

export { Default, Dark, Light, FitContent }
