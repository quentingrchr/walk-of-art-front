import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Guidance, IProps } from "./index"

export default {
    title: "Guidance",
    component: Guidance,
} as ComponentMeta<typeof Guidance>

const Template: ComponentStory<typeof Guidance> = (args: IProps) => <Guidance {...args} />

const Info = Template.bind({})
Info.args = {
    type: "info",
    children: "Guidance info message"
}
const Error = Template.bind({})
Error.args = {
    type: "error",
    children: "Guidance error message"
}
const Success = Template.bind({})
Success.args = {
    type: "success",
    children: "Guidance success message"
}

const ComplexChildren = Template.bind({})
ComplexChildren.args = {
    type: "success",
    children: <p>I am a complex HTML children <a href="#">I am a link</a></p>
}

export { Info, Error, Success, ComplexChildren }
