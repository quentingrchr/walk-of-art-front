import { Colors, Icons as IconsType , sizeIcon } from "@interfaces/index";
import cn from "classnames";
import styles from "./index.module.scss";

import Avatar from "./avatar";
import Notification from "./notification";
import Logout from "./logout";
import Profile from "./profile";
import Commentary from "./commentary";
import RightArrow from "./right-arrow";
import Cross from "./cross";
import Check from "./check";
import Checkbox from "./checkbox";
import Information from "./information";
import DropFile from "./drop-file";
import DownArrow from "./down-arrow";
import SearchIcon from "./search-icon";
import Chrono from "./chrono";
import Calendar from "./calendar";
import LittleDownArrow from './little-down-arrow'
import SelectCheck from './select-check'
import Trash from './trash'


interface IProps {
  type: IconsType;
  size: sizeIcon;
  color?: Colors | "none";
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
interface IIcons {
  [String: string]: JSX.Element;
}

const Icons: IIcons = {
  avatar: <Avatar />,
  notification: <Notification />,
  logout: <Logout />,
  profile: <Profile />,
  commentary: <Commentary/>,
  rightArrow: <RightArrow/>,
  downArrow: <DownArrow />,
  cross: <Cross/>,
  check: <Check/>,
  checkbox: <Checkbox/>,
  information: <Information />,
  searchIcon: <SearchIcon />,
  litteleDownArrow: <LittleDownArrow />,
  "drop-file": <DropFile />,
  chrono: <Chrono />,
  calendar: <Calendar />,
  selectCheck: <SelectCheck />,
  trash: <Trash />
};

const sizes: any = {
  none: "unset",
  xsmall: "0.8rem",
  small: "1.6rem",
  medium: "1.8rem",
  large: "2.2rem",
  xlarge: "4rem", // not used yet
  xxlarge: "8rem",
};

export const Icon = ({
  type,
  onClick,
  size,
  color = "none",
  ...props
}: IProps) => {
  return (
    <div
      onClick={(e) => onClick !== undefined && onClick(e)}
      className={cn(styles[color], "icon")}
      style={{ width: sizes[size], height: sizes[size] }}
    >
      {Icons[type]}
    </div>
  );
};
