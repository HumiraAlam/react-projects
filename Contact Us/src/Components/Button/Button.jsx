import React from "react";
import styles from "./Button.module.css";

export default function Button( {text, icon,isOutline, ...rest } ) {
  return (
    <button 
    {...rest}
    
    className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {text}
      {icon}

    </button>
  );
}
