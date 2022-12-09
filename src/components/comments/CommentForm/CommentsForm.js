import { useState } from "react";
import styles from "./CommentsForm.module.css";
const CommentsForm = () => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
    comment && setComment("");
  };

  return (
    <form
      className={`${styles.commentForm} row px-5 mx-5 px-sm-0`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={`${styles.commentFormTextArea} form-control`}
        placeholder="Write a comment..."
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        rows={7}
      ></textarea>
      <button className={`${styles.commentFormBtn} mx-auto`}>
        Send Comment
      </button>
    </form>
  );
};

export default CommentsForm;
