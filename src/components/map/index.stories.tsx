import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Map, IProps } from "./index"

export default {
    title: "Map",
    component: Map,
} as ComponentMeta<typeof Map>

const Template: ComponentStory<typeof Map> = (args: IProps) => <Map {...args} />

const Default = Template.bind({})

export { Default }
