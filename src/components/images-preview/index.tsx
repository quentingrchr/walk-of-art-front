import React from "react"
import cn from "classnames"
import styles from "./index.module.scss"

export type IProps = {
  primaryImage: string
  secondaryImages?: string[]
  onClick?: () => void
}

export const ImagesPreview: React.FC<IProps> = ({
  primaryImage,
  secondaryImages,
  onClick,
}: IProps) => {

  return (
    <div className={styles.imagesContainer} onClick={onClick}>
      {/* IMAGES */}

      {/* PRIMARY IMAGE  */}
      <div className={cn(styles.imageContainer, styles.primary)}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${primaryImage})`,
          }}
        ></div>
      </div>

      {/* SECONDARY IMAGES */}
      {secondaryImages && secondaryImages[0] && (
        <div
          className={cn(
            styles.imageContainer,
            styles.secondary,
            styles.secondary1
          )}
        >
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${secondaryImages[0]})`,
            }}
          ></div>
        </div>
      )}

      {secondaryImages && secondaryImages[1] && (
        <div
          className={cn(
            styles.imageContainer,
            styles.secondary,
            styles.secondary2
          )}
        >
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${secondaryImages && secondaryImages[1]})`,
            }}
          ></div>
        </div>
      )}

      {secondaryImages && secondaryImages[2] && (
        <div
          className={cn(
            styles.imageContainer,
            styles.secondary,
            styles.secondary3
          )}
        >
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${secondaryImages && secondaryImages[2]})`,
            }}
          ></div>
        </div>
      )}
    </div>
  )
}
