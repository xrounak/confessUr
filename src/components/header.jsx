import styles from "./header.module.css";

const Header = ({ toggleSidebar }) => {
  return (
    <header className={styles.header}>
      <button className={styles.toggleBtn} onClick={toggleSidebar}>
        ☰
      </button>
      <h2 className={styles.logo}>letsEE</h2>
    </header>
  );
};

export default Header;

