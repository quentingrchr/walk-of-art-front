import { atom } from "recoil"
import { IUser } from "../../types"

export const userState = atom({
  key: "user",
  default: null as IUser | null | undefined,
})
