import React from "react";
import styles from "./index.module.scss";

type ArtworkProps = {
  src,
  alt: string;
};

export const Artwork: React.FC<ArtworkProps> = ({ src, alt }) => {
  console.log(src);
  
  return (
    <div className={styles.artwork}>
     <img src={src.src} alt={alt} className={styles.image}/>
    </div>
  );
};
