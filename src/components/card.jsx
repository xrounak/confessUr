import React from 'react';
import styles from './card.module.css';

const Card = ({ title, body, userkey, reactions, tags = [], onDelete, onClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardHeader}>
          <span className={styles.userkey}>@{userkey}</span>
          <span className={styles.reactions}>❤️ {reactions}</span>
        </div>
        {title && <h2 className={styles.title} onClick={onClick}>{title}</h2>}
        {body && <p className={styles.body} onClick={onClick}>{body}</p>}

        {tags.length > 0 && (
          <div className={styles.tagContainer}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        )}

        <span className={styles.deleteIcon} onClick={onDelete} title="Delete">
          🗑
        </span>
      </div>
    </div>
  );
};

export default Card;
