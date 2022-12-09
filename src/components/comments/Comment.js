import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import profileImage from "../../../public/Images/profileImage.jpg";
import styles from "./Comment.module.css";

const Comment = () => {
  const comments = [
    {
      id: 1,
      name: "John Doe",
      image: profileImage,
      date: "28 Dec 2021",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 2,
      name: "John Doe",
      image: profileImage,
      date: "28 Dec 2021",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 3,
      name: "John Doe",
      image: profileImage,
      date: "28 Dec 2021",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];

  const handleReport = (e, id) => {
    e.preventDefault();
    let reportCard = document.querySelector(`#reportCard${id}`);
    reportCard.classList.toggle("d-none");
  };

  return (
    <Fragment>
      {comments.map((item) => (
        <div
          className={`${styles.commentsContainer} row px-5 my-5`}
          key={item.id}
        >
          <div className="col-2">
            <Image
              src={item.image}
              alt="profile image"
              width={80}
              height={80}
              className={`${styles.commentsProfileImg} rounded-circle`}
            />
          </div>
          <div className="col-10">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="mb-0 fw-bolder">{item.name}</h5>
              <div className="d-flex align-items-center gap-1 position-relative">
                <Link
                  href="#"
                  className={`${styles.commentActionBtn} d-flex me-2 align-items-center gap-1 text-decoration-none text-muted`}
                >
                  <span>22</span>
                  <i className="bi bi-heart-fill "></i>
                </Link>
                <Link
                  href="#"
                  className={`${styles.commentActionBtn} text-decoration-none text-muted`}
                  onClick={(e) => handleReport(e, item.id)}
                >
                  <i className="bi bi-exclamation-octagon-fill"></i>
                </Link>
                <div
                  className={`${styles.reportCard} position-absolute d-none`}
                  id={`reportCard${item.id}`}
                >
                  <div className="card-title text-center py-2">
                    <h6 className={`${styles.reportCardTitle} m-0 mt-2`}>
                      Report message
                    </h6>
                  </div>
                  <div className="card-body px-3">
                    <textarea
                      name="reportInput"
                      id="reportInput"
                      className={`${styles.reportInput}`}
                      placeholder="Write the reason..."
                      cols="25"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className=" card-footer text-center p-3">
                    <button className={`${styles.reportCardBtns}`}>
                      Send Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="my-2">{item.comment}</p>
            <span className="text-muted">{item.date}</span>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Comment;
