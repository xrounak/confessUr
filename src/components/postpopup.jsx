// src/components/PostPopup.jsx

import React, { useState, useContext } from 'react';
import styles from './PostPopup.module.css';
import { X, Heart, Send } from 'lucide-react';
import { Postlistcontext } from '../store/post-list-provider';
import { useComments } from '../store/comment-provider';

const PostPopup = ({ onClose, postId = 6}) => {
  const { postlist } = useContext(Postlistcontext);
  const { comments, addComment } = useComments();
  const post = postlist.find(p => p.id === postId);

  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState(Number(post?.reactions || 0));

  if (!post) return null;

  const handleLike = () => setLikes(prev => prev + 1);

  const handleComment = () => {
    const trimmed = comment.trim();
    if (trimmed) {
      addComment(post.id, trimmed);
      setComment('');
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        
        {/* First line: user key left, close button right */}
        <div className={styles.topBar}>
          <span className={styles.userkey}>@{post.userkey}</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Second line: tags right-aligned */}
        <div className={styles.tags}>
          {post.tags.map((tag, i) => (
            <span key={i} className={styles.tag}>#{tag}</span>
          ))}
        </div>

        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.body}>{post.body}</p>

        <div className={styles.actions}>
          <button onClick={handleLike} className={styles.iconBtn} aria-label="Like">
            <Heart size={18} />
            <span>{likes}</span>
          </button>
        </div>

        <div className={styles.commentSection}>
          <div className={styles.commentList}>
            {(comments[post.id] || []).map((text, i) => (
              <div key={i} className={styles.comment}>💬 {text}</div>
            ))}
          </div>

          <div className={styles.commentInput}>
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={handleComment} aria-label="Send Comment">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPopup;
