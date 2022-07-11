import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ReservationInfo, IProps } from "./index"

export default {
    title: "ReservationInfo",
    component: ReservationInfo,
} as ComponentMeta<typeof ReservationInfo>

const Template: ComponentStory<typeof ReservationInfo> = (args: IProps) => <ReservationInfo {...args} />

const Default = Template.bind({})

export { Default }
