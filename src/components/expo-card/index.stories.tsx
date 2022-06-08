import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ExpoCard, IProps } from "./index"

export default {
    title: "ExpoCard",
    component: ExpoCard,
} as ComponentMeta<typeof ExpoCard>

const Template: ComponentStory<typeof ExpoCard> = (args: IProps) => <ExpoCard {...args} />

const Default = Template.bind({})
Default.args = {
    remainingHours: 8,
    img: {
        src: "https://via.placeholder.com/300",
        alt: "test"
    },
    title: "Titre de l'expo"
}

export { Default }
