import React from "react";
import styles from "../../styles/components/Button.module.scss";
/*
  Two types for now: Dark and Light
*/
const Button = ({ name, onClick, type }) => {
  return (
    <button
      className={`${styles.Button}  ${
        type === "Dark" ? styles.ButtonDark : styles.ButtonLight
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
