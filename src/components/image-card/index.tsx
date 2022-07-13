import React from "react"
import styles from "./index.module.scss"
import cn from 'classnames'

type IProps = {
  src,
  alt,
  orientation: string;
  size?: string
};

export const ImageCard: React.FC<IProps>= ({ src, alt, orientation, size }) => {
  return (
    <div className={cn(styles.container, orientation === 'portrait' ? styles.portrait : styles.landscape)}>
        <div className={size == 'small' ? styles.sizeSmall : styles.sizeFull}>
            <img src={src.src} alt={alt.src} className={styles.image}/>
        </div>
    </div>
  );
};