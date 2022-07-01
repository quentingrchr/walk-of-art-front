import { InputTypes } from "../../../types"
import { IGuidance } from "@components/inputs/input-group"

export interface IFormInput {
  id: string
  type: InputTypes
  label: string
  placeholder: string
  guidance: (errors: any) => IGuidance | null
}
