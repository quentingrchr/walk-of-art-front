import React from "react"
import s from "./index.module.scss"
import { Badge } from "@components"
import { BadgeTypes } from "../../types"


export type IProps = {
    type: BadgeTypes
}

const BadgesTypes : Array<BadgeTypes> = ["progress", "completed"]

export const BadgeSelector: React.FC<IProps> = ({ type }: IProps) => {
    const height = 20;
    const selectedIndex: number = BadgesTypes.indexOf(type);
    const transform = `translateY(-${selectedIndex * height}px)`;
    const style = {
        "--badge-height": `${height}px`,
        "--badge-transform": transform,
    } as React.CSSProperties;

    return (
        <div className={s.container} style={style}>
            <div className={s.wrapper}>
                {BadgesTypes.map(badgeType => (
                    <Badge key={badgeType} type={badgeType} />
                ))}
            </div>
        </div>
    )
}
