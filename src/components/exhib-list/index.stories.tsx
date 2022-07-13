import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ExhibList, IProps } from "./index"

export default {
    title: "ExhibList",
    component: ExhibList,
} as ComponentMeta<typeof ExhibList>

const Template: ComponentStory<typeof ExhibList> = (args: IProps) => <ExhibList {...args} />

const Default = Template.bind({})

export { Default }
