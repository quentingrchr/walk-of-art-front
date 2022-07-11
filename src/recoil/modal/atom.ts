import { atom } from "recoil"

export const CONFIRM_WORK_DELETE_MODAL_ID = "CONFIRM_WORK_DELETE_MODAL"
export const CONFIRM_EXHIBITION_DELETE_MODAL_ID = "CONFIRM_EXHIBITION_DELETE_MODAL"
export const IMAGE_PREVIEW_MODAL_ID = "IMAGE_PREVIEW_MODAL"

type activeModalType = null | string
type modalDataType = null | Object

export const activeModalState = atom({
  key: "activeModal",
  default: null as activeModalType,
})

export const modalDataState = atom({
  key: "modalData",
  default: {
    data: null as modalDataType,
  },
})
