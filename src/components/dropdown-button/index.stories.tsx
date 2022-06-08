import { ComponentStory, ComponentMeta } from "@storybook/react"
import { DropdownButton, IProps } from "./index"

export default {
    title: "DropdownButton",
    component: DropdownButton,
} as ComponentMeta<typeof DropdownButton>

const Template: ComponentStory<typeof DropdownButton> = (args: IProps) => <DropdownButton {...args} />

const defaultProps: IProps = {
    icon: '',
    label: 'Label',
    fullWidth: false,
    choices: [
        { label: 'Choice', onClick: () => { } }
    ]
}


const Default = Template.bind({})
Default.args = defaultProps

const FullWidth = Template.bind({})
FullWidth.args = {
    ...defaultProps,
    fullWidth: true
}

const WithIcon = Template.bind({})
WithIcon.args = {
    ...defaultProps,
    icon: 'avatar'
}

const WithChoices = Template.bind({})
WithChoices.args = {
    ...defaultProps,
    choices: [
        { label: 'Choice 1', onClick: () => { } },
        { label: 'Choice 2', onClick: () => { } },
        { label: 'Choice 3', onClick: () => { } },
        { label: 'Choice 4', onClick: () => { } },
        { label: 'Choice 5', onClick: () => { } },
        { label: 'Choice 6', onClick: () => { } },
    ]
}



export { Default, FullWidth, WithIcon, WithChoices }
