import IcomoonReact from "icomoon-react"
import iconSet from "@assets/fonts/icomoon/selection.json"
import { Colors, Icons as IconsType, sizeIcon } from "@interfaces/index"
import cn from "classnames"
import styles from "./index.module.scss"

// import Avatar from "./avatar"
// import Notification from "./notification"
// import Logout from "./logout"
// import Profile from "./profile"
// import Commentary from "./commentary"
// import RightArrow from "./right-arrow"
// import Cross from "./cross"
// import Check from "./check"
// import Checkbox from "./checkbox"
// import Information from "./information"
// import DropFile from "./drop-file"
// import DownArrow from "./down-arrow"
// import SearchIcon from "./search-icon"
// import Chrono from "./chrono"
// import Calendar from "./calendar"

interface IProps {
  type: IconsType
  size: sizeIcon
  color?: Colors | "none"
  children?: React.ReactNode
  customSize?: number
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  position?: "inline" | "center"
}

const sizeMap: {
  [key in sizeIcon]: string
} = {
  xsmall: "0.8rem",
  small: "1.6rem",
  medium: "1.8rem",
  large: "2.2rem",
  xlarge: "4rem",
  xxlarge: "8rem",
}

export const Icon = ({
  type,
  onClick,
  size,
  color = "black",
  customSize,
  position = "inline",
}: IProps) => {
  const computedSize = customSize !== undefined ? customSize : sizeMap[size]
  return (
    <div
      onClick={(e) => onClick !== undefined && onClick(e)}
      className={cn(styles[color], "icon", styles[position])}
    >
      <IcomoonReact
        iconSet={iconSet}
        icon={type}
        size={computedSize}
        className={cn(styles.icon, styles[type])}
      />
    </div>
  )
}
