import { ComponentStory, ComponentMeta } from "@storybook/react"
import { LoginForm, IProps } from "./index"
import { signInInputs, signInInputsSchema } from "../../../../data/form"

export default {
    title: "LoginForm",
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args: IProps) => <LoginForm {...args} />

const Default = Template.bind({})
Default.args = {
    inputs: signInInputs,
    schema: signInInputsSchema,
    onSubmit: () => {alert('submit')},
    submitText: "Se connecter",
    title: "Connexion"
}

export { Default }
