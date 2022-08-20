import React from "react";
import styles from "../../styles/components/Input.module.scss";

const Input = ({ placeholder }) => {
  return (
    <div className={styles.InputWrapper}>
      <input className={styles.Input} placeholder={placeholder}></input>
    </div>
  );
};

export default Input;
