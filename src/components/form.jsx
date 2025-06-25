import React from 'react';
import styles from './Form.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = ({ submit }) => {
  return (
    <div className={styles.backdrop}>
      <div className={`${styles.formContainer} position-relative shadow-lg`}>
        <button
          type="button"
          className={` position-absolute top-0 end-0 ${styles.closeBtn}`}
          onClick={() => submit("home")}
        >X</button>

        <form
          className="d-flex flex-column gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            submit("home");
          }}
        >
          <div className={`d-flex flex-column ${styles.formGroup}`}>
            <label htmlFor="email">Title</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={`d-flex flex-column ${styles.formGroup}`}>
            <label htmlFor="textarea">Post content</label>
            <textarea id="textarea" name="textarea" required />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
