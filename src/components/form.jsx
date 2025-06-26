import React, { useContext, useRef, useState } from "react";
import styles from "./Form.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Postlistcontext } from "../store/post-list-provider";

const Form = ({ selectedtab }) => {
  const { addPost } = useContext(Postlistcontext);

  const titleRef = useRef();
  const bodyRef = useRef();
  const tagInputRef = useRef();

  const [tags, setTags] = useState([]);

  const handleAddTag = (e) => {
    e.preventDefault(); // Prevents form from submitting

    const newTag = tagInputRef.current.value.trim(); // Get the trimmed input

    // Only add if it's not empty and doesn't already exist
    if (newTag && !tags.includes(newTag)) {
      setTags((prevTags) => [...prevTags, newTag]); // Add to the end of the tag list
      tagInputRef.current.value = ""; // Clear input
      tagInputRef.current.focus(); // Focus back to input
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(
      (prevTags) => prevTags.filter((tag) => tag !== tagToRemove) // Remove matching tag
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
      tags: tags,
    };

    addPost(newPost);
    selectedtab("home");
  };

  return (
    <div className={styles.backdrop}>
      <div className={`${styles.formContainer} position-relative shadow-lg`}>
        <button
          type="button"
          className={`position-absolute top-0 end-0 ${styles.closeBtn}`}
          onClick={() => selectedtab("home")}
        >
          X
        </button>

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">

          {/* Title */}
          <div className={`d-flex flex-column ${styles.formGroup}`}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={titleRef} required />
          </div>

          {/* Body */}
          <div className={`d-flex flex-column ${styles.formGroup}`}>
            <label htmlFor="body">Post Content</label>
            <textarea id="body" ref={bodyRef} required />
          </div>

          {/* Tags */}
          <div className={`d-flex flex-column ${styles.formGroup}`}>
            <label htmlFor="tags">Tags</label>
            <div className={styles.tagInputGroup}>
              <input
                type="text"
                id="tags"
                ref={tagInputRef}
                placeholder="Enter tag and click Add"
              />
              <button onClick={handleAddTag} className={styles.addTagBtn}>
                Add
              </button>
            </div>

            <div className="d-flex flex-wrap mt-2">
              {tags.map((tag, index) => (
                <span key={index} className={styles.tagBadge}>
                  {tag}
                  <button type="button" onClick={() => handleRemoveTag(tag)}>
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
