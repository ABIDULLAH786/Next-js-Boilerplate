import Image from "next/image";
import styles from "./page.module.css";
import variables from "./variables.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <h1 style={{ color: variables.primaryColor }}>Hello, THis is SCSS style in Next.js!</h1>
    </main>
  );
}
