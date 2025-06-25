import styles from "./sidebar.module.css";

const tabs = [
  { id: "home", label: "Home" },
  { id: "settings", label: "Settings" },
  { id: "create-posts", label: "Create Posts" },
];

const Sidebar = ({ isOpen, onClose, selectedTab, setSelectedTab }) => {
  const activeIndex = tabs.findIndex((tab) => tab.id === selectedTab);

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`}>
      <div className={styles.sidebar}>
        <div className={styles.radioWrapper} style={{ "--total-radio": tabs.length }}>
          <div className={styles.radioContainer}>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => {
                  setSelectedTab(tab.id);
                }}
                className={`${styles.tabLabel} ${
                  selectedTab === tab.id ? styles.active : ""
                }`}
              >
                {tab.label}
              </div>
            ))}
            <div className={styles.gliderContainer}>
              <div
                className={styles.glider}
                style={{ transform: `translateY(${activeIndex * 100}%)` }}
              />
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <button className="btn btn-outline-light w-100">Logout</button>
        </div>
      </div>
      <div className={styles.backdrop} onClick={onClose}></div>
    </div>
  );
};

export default Sidebar;
