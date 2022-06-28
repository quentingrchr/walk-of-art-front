import React from "react";
import styles from "./index.module.scss";

type ArtworkProps = {
  src,
  alt: string;
  size: "small" | "large";
};

const sizes :any = {
  small: "120px",
  large: "192px",
}

export const Artwork: React.FC<ArtworkProps> = ({ src, alt, size }) => {
  return (
    <div className={styles.artwork} style={{width: sizes[size], height: sizes[size] }}>
     <img src={src.src} alt={alt} className={styles.image}/>
    </div>
  );
};
