import styles from "../styles/pages/Home.module.scss";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.PageWrapper}>
      <form className={styles.Form}>
        <div className={styles.FormInputWrapper}>
          <input className={styles.FormInput} placeholder="First Name"></input>
        </div>
        <div className={styles.FormInputWrapper}>
          <input className={styles.FormInput}></input>
        </div>
        <div className={styles.FormInputWrapper}>
          <input className={styles.FormInput}></input>
        </div>
        <div className={styles.FormInputWrapper}>
          <input className={styles.FormInput}></input>
        </div>
      </form>
      <div className={styles.ButtonWrapper}>
        <button className={styles.ButtonCancel}>Cancel</button>
        <button
          className={styles.ButtonSignUp}
          onClick={() => router.push("/dashboard")}
        >
          Sign Up
        </button>
      </div>

      {/* <h1>Build your form here</h1>
      <h2>Define the styles in Home.module.scss</h2>

      <div className={styles.Example}>
        <h2 className={styles.ExampleHeader}>This is an example header</h2>
        <div className={styles.ExampleBox}>
          <p className={styles.ExampleBoxDetails}>These are example details</p>
        </div>
      </div> */}
    </div>
  );
}
