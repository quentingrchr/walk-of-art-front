import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ExhibitionCard, IProps } from "./index"

export default {
    title: "ExhibitionCard",
    component: ExhibitionCard,
} as ComponentMeta<typeof ExhibitionCard>

const Template: ComponentStory<typeof ExhibitionCard> = (args: IProps) => <ExhibitionCard {...args} />

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
