import Image from "next/image";
import { useState } from "react";
import fact from "../../../public/Icons/fact.svg";
import about from "../../../public/Images/about.png";
import blog_s_video from "../../../public/Images/blog_s_video.png";
import styles from "./About.module.css";

const About = ({ aboutTab, factTab }) => {
  const [tabActive, setTabActive] = useState("aboutTab1");
  const [tabActive2, setTabActive2] = useState("factTab1");

  return (
    <>
      <div
        className={`${styles.aboutSection} d-flex g-0 align-items-center py-5`}
      >
        <Image src={about} alt="about" className={`${styles.aboutImage}`} />
        <div className="p-4">
          <h4 className="fw-bold">About Platute</h4>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            pharetra, justo in malesuada tempus, erat mauris molestie lorem, sit
            amet porta odio massa ut magna. Fusce varius sit amet dui eget
            euismod. Aenean ac pretium libero. Aenean odio dui, sollicitudin ut
            semper sit amet, placerat at quam. Fusce blandit egestas enim, sit
            amet pharetra risus tincidunt nec. Aenean ipsum dui, pretium semper
            lectus at, aliquam gravida tortor. Phasellus et interdum diam, in
            mollis nisl. Phasellus pharetra, elit nec dignissim porttitor, justo
            ligula luctus purus, sit amet ultrices nunc neque id felis.
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
        <p className={`${styles.article} px-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra,
          justo in malesuada tempus, erat mauris molestie lorem, sit amet porta
          odio massa ut magna. Fusce varius sit amet dui eget euismod. Aenean ac
          pretium libero. Aenean odio dui, sollicitudin ut semper sit amet,
          placerat at quam. Fusce blandit egestas enim, sit amet pharetra risus
          tincidunt nec. Aenean ipsum dui, pretium semper lectus at, aliquam
          gravida tortor. Phasellus et interdum diam, in mollis nisl. Phasellus
          pharetra, elit nec dignissim porttitor, justo ligula luctus purus, sit
          amet ultrices nunc neque id felis. Suspendisse feugiat pellentesque
          placerat. Nam sed eleifend erat. In et lorem ultrices, bibendum massa
          in, finibus leo. Suspendisse volutpat faucibus congue. Maecenas urna
          ipsum, fringilla at eros non, blandit tincidunt massa. Nulla vitae
          euismod leo, in sodales neque.
        </p>
        <p className={`${styles.article} px-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra,
          justo in malesuada tempus, erat mauris molestie lorem, sit amet porta
          odio massa ut magna. Fusce varius sit amet dui eget euismod. Aenean ac
          pretium libero. Aenean odio dui, sollicitudin ut semper sit amet,
          placerat at quam. Fusce blandit egestas enim, sit amet pharetra risus
          tincidunt nec. Aenean ipsum dui, pretium semper lectus at, aliquam
          gravida tortor.
        </p>
        <div
          className={`${styles.aboutSection} row g-0 align-items-center mx-5 px-5`}
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
    </>
  );
};

export default About;
