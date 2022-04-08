import { InputTypes } from "../../../types"
import { IGuidance } from "../input-group/index"


export interface IFormInput {
    register: any,
    type: InputTypes,
    label: string,
    placeholder: string,
    guidance: (errors: any) => IGuidance | null
}
