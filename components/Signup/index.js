import React from "react";
import Input from "../../components/Input";
import Form from "../../components/form";
import Button from "../Button";
import styles from "../../styles/components/Signup.module.scss";
import { useRouter } from "next/router";
const Signup = ({ setFormView }) => {
  const router = useRouter();
  return (
    <Form>
      <Input placeholder="First Name*" />
      <Input placeholder="Last Name*" />
      <Input placeholder="Email*" />
      <Input placeholder="Password*" />
      <div className={styles.ButtonWrapper}>
        <Button
          type="Light"
          onClick={() => setFormView("welcome")}
          name="Cancel"
        />
        <Button
          type="Dark"
          onClick={() => router.push("/dashboard")}
          name="Login"
        />
      </div>
    </Form>
  );
};

export default Signup;
