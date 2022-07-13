import { atom } from "recoil"
import { IUser } from "../../types"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist()

export const userState = atom({
  key: "user",
  default: null as IUser | null | undefined,
  effects_UNSTABLE: [persistAtom],
})
