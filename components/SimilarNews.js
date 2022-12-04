import Image from "next/image";
import Link from "next/link";
import newsImage from "../public/Images/newsImage.jpg";
import profileImage from "../public/Images/profileImage.jpg";
import htmlCss from "../public/Images/htmlCss.png";
import UXUI from "../public/Images/UXUI.png";

const SimilarNews = ({ styles }) => {
  const news = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: newsImage,
      date: "28 Dec 2021",
      category: "Educational",
      author: {
        name: "John Doe",
        image: profileImage,
      },
      link: "#",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: htmlCss,
      date: "28 Dec 2021",
      category: "Educational",
      author: {
        name: "John Doe",
        image: profileImage,
      },
      link: "#",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: UXUI,
      date: "28 Dec 2021",
      category: "Educational",
      author: {
        name: "John Doe",
        image: profileImage,
      },
      link: "#",
    },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center w-100 my-5 gap-3">
      {news.map((item) => (
        <Link
          className={`${styles.newsContainer} col-md-4 position-relative text-decoration-none`}
          href={item.link}
          key={item.id}
        >
          <Image src={item.image} alt="news image" />
          <p className={`${styles.newsTag} position-absolute top-0 px-4 py-1`}>
            {item.category}
          </p>
          <h6 className="m-3 fw-bolder text-dark">{item.title}</h6>
          <div className="d-flex justify-content-between align-items-center gap-2 m-2 mb-3">
            <div className="d-flex align-items-center gap-2">
              <Image
                src={item.author.image}
                alt="profile image"
                width={40}
                height={40}
                className={`${styles.commentsProfileImg} rounded-circle`}
              />
              <span className="text-muted">{item.author.name}</span>
            </div>
            <small className="text-muted">{item.date}</small>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SimilarNews;
