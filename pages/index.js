import React, { useState } from "react";
import Welcome from "../components/Welcome";
import styles from "../styles/pages/Home.module.scss";
import Signup from "../components/Signup";
import Login from "../components/Login";
export default function Home() {
  const [formView, setFormView] = useState("welcome");

  return (
    <div className={styles.HomeWrapper}>
      {formView === "welcome" ? (
        <Welcome setFormView={setFormView} />
      ) : formView === "login" ? (
        <Login setFormView={setFormView} />
      ) : (
        formView === "signup" && <Signup setFormView={setFormView} />
      )}
      ;
    </div>
  );
}
