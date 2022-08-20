import React from "react";
import Input from "../../components/Input";
import Form from "../../components/form";
import styles from "../../styles/pages/Home.module.scss";

const Signup = () => {
  return (
    <Form>
      <Input placeholder="First Name*" />
      <Input placeholder="Last Name*" />
      <Input placeholder="Email*" />
      <Input placeholder="Password*" />
      <div className={styles.ButtonWrapper}>
        <button className={styles.ButtonCancel}>Cancel</button>
        <button
          className={styles.ButtonSignUp}
          onClick={() => router.push("/dashboard")}
        >
          Sign Up
        </button>
      </div>
    </Form>
  );
};

export default Signup;
