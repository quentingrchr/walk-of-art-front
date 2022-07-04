import React from "react";
import styles from "./index.module.scss";

type ExpositionBoard = {
  src,
  alt: string;
  orientation: string;
};

export const ExpositionBoard: React.FC<ExpositionBoard> = ({ src, alt, orientation }) => {
  return (
    <div className={orientation === 'portrait' ? styles.portrait : styles.landscape} >
     <img src={src.src} alt={alt} className={styles.image}/>
    </div>
  );
};
