import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>&copy; {new Date().getFullYear()} My App. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
