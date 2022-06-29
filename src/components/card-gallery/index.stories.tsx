import { ComponentStory, ComponentMeta } from "@storybook/react"
import { CardGallery, IProps } from "./index"

export default {
    title: "CardGallery",
    component: CardGallery,
} as ComponentMeta<typeof CardGallery>

const Template: ComponentStory<typeof CardGallery> = (args: IProps) => <CardGallery {...args} />

const Default = Template.bind({})

export { Default }
