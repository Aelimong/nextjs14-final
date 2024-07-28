import styles from "../../styles/About.module.scss";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_inner}>
          <h1 className={styles.about_title}>ABOUT US</h1>
          <p>
            Welcome to the official explorer for The Aelimong Books Best Seller
            list explorer.
            <br />
            We hope you enjoy your stay!
          </p>
        </div>
      </div>
    </>
  );
}
