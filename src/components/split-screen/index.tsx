import React from "react"
import cn from "classnames"
import s from "./index.module.scss"

export type IProps = {
    component: React.ReactNode,
    image: string,
    componentIs?: 'left' | 'right',
}

const Image = ({ src }: any) => { 
    return (
        <div className={s.image} style={{backgroundImage: `url("${src}")`}}>
        </div>
    )
}

export const SplitScreen: React.FC<IProps> = ({ component, componentIs = 'left', image }: IProps) => {
    const componentIsLeft = componentIs === 'left'
    return (
        <div className={cn(s.container)}>
            <div className={cn(s.left, { [s.imageContainer]: !componentIsLeft })}>
                {componentIsLeft ? component : <Image src={image} />}
            </div>
            <div className={cn(s.right, {[s.imageContainer]: componentIsLeft } )}>
                {!componentIsLeft ? component : <Image src={image} />}
            </div>
        </div>
    )
}
