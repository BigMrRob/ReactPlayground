import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <h1>Build your form here</h1>
      <h2>Define the styles in Home.module.scss</h2>

      {/* The following is how you define styles in React vs. regular HTML using SCSS Modules. Just follow the convention for now I will explain more later */}
      <div className={styles.Example}>
        <h2 className={styles.ExampleHeader}>This is an example header</h2>
        <div className={styles.ExampleBox}>
          <p className={styles.ExampleBoxDetails}>These are example details</p>
        </div>
      </div>
    </div>
  );
}
