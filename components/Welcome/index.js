import React from "react";
import Button from "../Button";
import styles from "../../styles/components/Welcome.module.scss";
const Welcome = ({ setFormView }) => {
  return (
    <div className={styles.Welcome}>
      <Button
        type="Light"
        onClick={() => setFormView("login")}
        name="Click here to login"
      />
      <Button
        type="Dark"
        onClick={() => setFormView("signup")}
        name="Click here to signup"
      />
    </div>
  );
};

export default Welcome;
