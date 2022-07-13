import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ImageCard, IProps } from "./index"

export default {
    title: "ImageCard",
    component: ImageCard,
} as ComponentMeta<typeof ImageCard>

const Template: ComponentStory<typeof ImageCard> = (args: IProps) => <ImageCard {...args} />

const Default = Template.bind({})

export { Default }
