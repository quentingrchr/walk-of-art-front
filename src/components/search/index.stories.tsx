import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Search, IProps } from "./index"

export default {
  title: "Search",
  component: Search,
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = (args: IProps) => (
  <Search {...args} />
)

const Default = Template.bind({})
Default.args = {
  id: "text",
  placeholder: "Text",
}

export { Default }
