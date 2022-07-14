import React from "react"
import styles from "./index.module.scss"
import cn from 'classnames'
import {Text ,Icon} from '..'

type IProps = {
  src,
  alt,
  orientation: string;
  size?: string;
  status?: string
};

export const ImageCard: React.FC<IProps>= ({ src, alt, orientation, size, status }) => {
  return (
    <div className={cn(styles.container, orientation === 'portrait' ? styles.portrait : styles.landscape)}>
        <div className={size == 'small' ? styles.sizeSmall : styles.sizeFull}>
            {
                status === 'remaining' ? 
                <div className={cn(styles.tag, styles.isRemaining)}>
                    <Text tag="p" typo="guidance">
                        En exposition
                    </Text>
                </div> 
                : status === 'incoming' ?
                <div className={cn(styles.tag, styles.isIncoming)}>
                    <Text tag="p" typo="guidance">
                        A venir
                    </Text>
                </div>
                : status === 'pending' ?
                <div className={cn(styles.tag, styles.isPending)}>
                    <Text tag="p" typo="guidance">
                        En Modération
                    </Text>
                </div>
                : status === 'refused' ?
                <div className={cn(styles.tag, styles.isRefused)}>
                    <Icon type="warning" size="large"/>
                </div>
                : ''
            }
            <img src={src.src} alt={alt.src} className={styles.image}/>
        </div>
    </div>
  );
};