import { Colors, Icons as IconsType } from "@interfaces/index";
import cn from "classnames";
import styles from "./index.module.scss";

import Avatar from "./avatar";
import Checkbox from "./checkbox";

interface IProps {
  type: IconsType,
  size: "small" | "medium" | "large";
  color?: Colors | "none";
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
interface IIcons {
  [String: string]: JSX.Element;
}

const Icons: IIcons = {
  avatar: <Avatar />,
  checkbox: <Checkbox/>
};

const sizes :any = {
  small: "1.6rem",
  medium: "1.8rem",
  large: "2.2rem",
}

export const Icon = ({ type, onClick, size, color = "none", ...props }: IProps) => {
  return (
    <div onClick={(e) => onClick !== undefined && onClick(e)} className={cn(styles[color], "icon")} style={{width: sizes[size], height: sizes[size] }}>
      {Icons[type]}
    </div>
  );
};
