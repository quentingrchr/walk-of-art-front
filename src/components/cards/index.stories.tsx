import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Cards, IProps } from "./index"

export default {
    title: "Cards",
    component: Cards,
} as ComponentMeta<typeof Cards>

const Template: ComponentStory<typeof Cards> = (args: IProps) => <Cards {...args} />

const Default = Template.bind({})

export { Default }
