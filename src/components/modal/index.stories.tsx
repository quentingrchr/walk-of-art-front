import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Modal, IProps } from "./index"

export default {
    title: "Modal",
    component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args: IProps) => <Modal {...args} />

const Default = Template.bind({})

export { Default }
