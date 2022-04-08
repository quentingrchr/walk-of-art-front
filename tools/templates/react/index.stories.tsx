import { ComponentStory, ComponentMeta } from "@storybook/react"
import { __component__(pascalCase), IProps } from "./index"

export default {
    title: "__component__(pascalCase)",
    component: __component__(pascalCase),
} as ComponentMeta<typeof __component__(pascalCase)>

const Template: ComponentStory<typeof __component__(pascalCase)> = (args: IProps) => <__component__(pascalCase) {...args} />

const Default = Template.bind({})

export { Default }
