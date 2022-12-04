import { useState } from "react";

const CommentsForm = ({ styles }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log(comment);
      comment && setComment("");
  };

  return (
    <form className="row px-5 mx-5" onSubmit={handleSubmit}>
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
