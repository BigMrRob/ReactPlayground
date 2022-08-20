import React from "react";
import styles from "../../styles/components/Form.module.scss";

const Form = ({ children }) => {
  return <form className={styles.FormWrapper}>{children}</form>;
};

export default Form;
