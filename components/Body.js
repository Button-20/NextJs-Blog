import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import bookmarkWhite from "../public/Icons/bookmarkWhite.svg";
import fact from "../public/Icons/fact.svg";
import shareWhite from "../public/Icons/shareWhite.svg";
import about from "../public/Images/about.png";
import ads from "../public/Images/ads.png";
import blog_s_video from "../public/Images/blog_s_video.png";
import child from "../public/Images/child.jpg";
import profileImage from "../public/Images/profileImage.jpg";
import Comment from "./Comment";
import CommentsForm from "./CommentsForm";
import SimilarNews from "./SimilarNews";

const Body = ({ styles }) => {
  const [tabActive, setTabActive] = useState("aboutTab1");
  const [tabActive2, setTabActive2] = useState("factTab1");

  const aboutTab = [
    {
      id: 1,
      value: "aboutTab1",
    },
    {
      id: 2,
      value: "aboutTab2",
    },
    {
      id: 3,
      value: "aboutTab3",
    },
  ];

  const factTab = [
    {
      id: 1,
      value: "factTab1",
    },
    {
      id: 2,
      value: "factTab2",
    },
    {
      id: 3,
      value: "factTab3",
    },
    {
      id: 4,
      value: "factTab4",
    },
    {
      id: 5,
      value: "factTab5",
    },
  ];

  return (
    <div className="row py-5">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h3 className={`${styles.headerText} px-5 pb-4 fw-bold`}>
          With Platute, you are in charge of your schedule which means you can
          get the help you want, when you need it.
        </h3>
        <div className="position-relative">
          <Image src={child} alt="child" className={styles.featuredImage} />
          <div className="position-absolute top-0 d-flex justify-content-between w-100 p-4">
            <button className={`${styles.button} ${styles.featuredButton}`}>
              Platute News
            </button>
            <div className="d-flex align-items-center">
              <Link href="#" className={styles.iconButton}>
                <Image src={bookmarkWhite} alt="bookmark" />
              </Link>
              <Link href="#" className={styles.iconButton}>
                <Image src={shareWhite} alt="share" />
              </Link>
            </div>
          </div>
          <div className="position-absolute bottom-0 p-4">
            <div
              className={`${styles.profileContainer} d-flex align-items-center p-2 bg-white`}
            >
              <div className="rounded-circle bg-white me-3">
                <Image
                  src={profileImage}
                  alt="child"
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.profileDetails}>
                <h6 className="fw-normal m-0">Platute</h6>
                <p className="m-0">Posted at 28 Dec 2021</p>
              </div>
            </div>
          </div>
        </div>
        <section className="py-5">
          <p className="px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            pharetra, justo in malesuada tempus, erat mauris molestie lorem, sit
            amet porta odio massa ut magna. Fusce varius sit amet dui eget
            euismod. Aenean ac pretium libero. Aenean odio dui, sollicitudin ut
            semper sit amet, placerat at quam. Fusce blandit egestas enim, sit
            amet pharetra risus tincidunt nec. Aenean ipsum dui, pretium semper
            lectus at, aliquam gravida tortor. Phasellus et interdum diam, in
            mollis nisl. Phasellus pharetra, elit nec dignissim porttitor, justo
            ligula luctus purus, sit amet ultrices nunc neque id felis.
            Suspendisse feugiat pellentesque placerat. Nam sed eleifend erat. In
            et lorem ultrices, bibendum massa in, finibus leo. Suspendisse
            volutpat faucibus congue. Maecenas urna ipsum, fringilla at eros
            non, blandit tincidunt massa. Nulla vitae euismod leo, in sodales
            neque.
          </p>
          <p className="px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            pharetra, justo in malesuada tempus, erat mauris molestie lorem, sit
            amet porta odio massa ut magna. Fusce varius sit amet dui eget
            euismod. Aenean ac pretium libero. Aenean odio dui, sollicitudin ut
            semper sit amet, placerat at quam. Fusce blandit egestas enim, sit
            amet pharetra risus tincidunt nec. Aenean ipsum dui, pretium semper
            lectus at, aliquam gravida tortor.
          </p>
          <div className="px-5 d-flex align-items-baseline">
            <p className="m-0 col pe-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pharetra, justo in malesuada tempus, erat mauris molestie lorem,
              sit amet porta odio massa ut magna. Fusce varius sit amet dui eget
              euismod. Aenean ac pretium libero. Aenean odio dui, sollicitudin
              ut semper sit amet, placerat at quam.
            </p>
            <ul className={`${styles.sectionList} m-0 col ps-5 p-4`}>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              </li>
            </ul>
          </div>
        </section>

        {/* About Section */}
        <div className={`${styles.aboutSection} d-flex align-items-center`}>
          <Image src={about} alt="about" className={styles.aboutImage} />
          <div className="p-4">
            <h4 className="fw-bold">About Platute</h4>
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pharetra, justo in malesuada tempus, erat mauris molestie lorem,
              sit amet porta odio massa ut magna. Fusce varius sit amet dui eget
              euismod. Aenean ac pretium libero. Aenean odio dui, sollicitudin
              ut semper sit amet, placerat at quam. Fusce blandit egestas enim,
              sit amet pharetra risus tincidunt nec. Aenean ipsum dui, pretium
              semper lectus at, aliquam gravida tortor. Phasellus et interdum
              diam, in mollis nisl. Phasellus pharetra, elit nec dignissim
              porttitor, justo ligula luctus purus, sit amet ultrices nunc neque
              id felis.
            </p>
            <div className="d-flex align-items-center mt-4">
              {aboutTab.map((tab, index) => (
                <span
                  key={index}
                  onClick={() => setTabActive(tab.value)}
                  id={tab.id}
                  className={`${styles.aboutTabs} ${
                    tabActive === tab.value && styles.active
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="py-5">
          <Image
            src={blog_s_video}
            alt="blog_s_video"
            className={styles.aboutVideo}
          />
        </div>
        <section className="pb-5">
          <p className="px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            pharetra, justo in malesuada tempus, erat mauris molestie lorem, sit
            amet porta odio massa ut magna. Fusce varius sit amet dui eget
            euismod. Aenean ac pretium libero. Aenean odio dui, sollicitudin ut
            semper sit amet, placerat at quam. Fusce blandit egestas enim, sit
            amet pharetra risus tincidunt nec. Aenean ipsum dui, pretium semper
            lectus at, aliquam gravida tortor. Phasellus et interdum diam, in
            mollis nisl. Phasellus pharetra, elit nec dignissim porttitor, justo
            ligula luctus purus, sit amet ultrices nunc neque id felis.
            Suspendisse feugiat pellentesque placerat. Nam sed eleifend erat. In
            et lorem ultrices, bibendum massa in, finibus leo. Suspendisse
            volutpat faucibus congue. Maecenas urna ipsum, fringilla at eros
            non, blandit tincidunt massa. Nulla vitae euismod leo, in sodales
            neque.
          </p>
          <p className="px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            pharetra, justo in malesuada tempus, erat mauris molestie lorem, sit
            amet porta odio massa ut magna. Fusce varius sit amet dui eget
            euismod. Aenean ac pretium libero. Aenean odio dui, sollicitudin ut
            semper sit amet, placerat at quam. Fusce blandit egestas enim, sit
            amet pharetra risus tincidunt nec. Aenean ipsum dui, pretium semper
            lectus at, aliquam gravida tortor.
          </p>
          <div
            className={`${styles.aboutSection} d-flex align-items-center mx-5 px-5`}
          >
            <Image src={fact} alt="about" width={80} />
            <div className="p-4">
              <h4 className="fw-bold">Did you know?</h4>
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                pharetra, justo in malesuada tempus, erat mauris molestie.
              </p>
              <div className="d-flex align-items-center mt-4">
                {factTab.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => setTabActive2(item.value)}
                    id={item.id}
                    className={`${styles.factTabs} ${
                      tabActive2 === item.value && styles.active
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* End of About Section */}

        {/* Comments Section */}
        <section className="py-5">
          <h3 className="text-center fw-bolder">Comments</h3>
          <Comment styles={styles} />
        </section>
        {/* End of Comments Section */}

        {/* Comment Form Section */}
        <section className="py-5">
          <h3 className="text-center fw-bolder">Write a Comment</h3>
          <p className="text-center">
            <i className={`bi bi-exclamation-circle-fill ${styles.commentFormText}`}></i> For sending message you
            must{" "}
            <Link href="#" className={styles.commentFormSignUpLink}>
              Sign up
            </Link>
            .
          </p>
          <CommentsForm styles={styles} />
        </section>

        {/* Similar News Section */}
        <section>
          <h3 className="text-center fw-bolder">Similar News</h3>
          <SimilarNews styles={styles} />
        </section>
      </div>
      <div className="col-md-2">
        <Image src={ads} alt="ads" className={styles.adsImg} />
      </div>
    </div>
  );
};

export default Body;