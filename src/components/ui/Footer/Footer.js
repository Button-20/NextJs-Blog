import Image from "next/image";
import Link from "next/link";
import at from "../../../../public/Icons/at.png";
import facebook from "../../../../public/Icons/facebook.png";
import instagram from "../../../../public/Icons/instagram.png";
import linkedin from "../../../../public/Icons/linkedin.png";
import twitter from "../../../../public/Icons/twitter.png";
import logoWhite from "../../../../public/Images/logoWhite.png";

const Footer = ({ styles }) => {
  const homeLinks = [
    {
      id: 1,
      title: "How Platute Works",
      link: "#",
    },
    {
      id: 2,
      title: "App Features",
      link: "#",
    },
    {
      id: 3,
      title: "Meet Tutors",
      link: "#",
    },
    {
      id: 4,
      title: "Download",
      link: "#",
    },
  ];

  const exploreLinks = [
    {
      id: 1,
      title: "About Us",
      link: "#",
    },
    {
      id: 2,
      title: "Blog",
      link: "#",
    },
    {
      id: 3,
      title: "Careers",
      link: "#",
    },
  ];

  const helpLinks = [
    {
      id: 1,
      title: "Contact Us",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      title: "LinkedIn",
      link: "#",
      icon: linkedin,
    },
    {
      id: 2,
      title: "Instagram",
      link: "#",
      icon: instagram,
    },
    {
      id: 3,
      title: "Facebook",
      link: "#",
      icon: facebook,
    },
    {
      id: 4,
      title: "Twitter",
      link: "#",
      icon: twitter,
    },
    {
      id: 5,
      title: "Email",
      link: "#",
      icon: at,
    },
  ];

  return (
    <footer className="d-flex flex-column justify-content-center">
      <div className={`${styles.footerTop} d-flex col py-5`}>
        <Link href="#" className="col-12 col-md-3">
          <Image src={logoWhite} alt="logo" width={200} />
        </Link>
        <div className="col-12 col-md-2">
          <h5 className="fw-bold text-white">Home</h5>
          <ul className="list-unstyled">
            {homeLinks.map((link) => (
              <li key={link.id} className="my-2">
                <Link
                  href={link.link}
                  className={`${styles.footerLinks} text-decoration-none`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-2">
          <h5 className="fw-bold text-white">Explore</h5>
          <ul className="list-unstyled">
            {exploreLinks.map((link) => (
              <li key={link.id} className="my-2">
                <Link
                  href={link.link}
                  className={`${styles.footerLinks} text-decoration-none`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-2">
          <h5 className="fw-bold text-white">Help</h5>
          <ul className="list-unstyled">
            {helpLinks.map((link) => (
              <li key={link.id} className="my-2">
                <Link
                  href={link.link}
                  className={`${styles.footerLinks} text-decoration-none`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-3">
          <h5 className="fw-bold text-white">Social Media</h5>
          <ul className="list-unstyled">
            {socialLinks.map((link) => (
              <li key={link.id} className="me-2 d-inline align-items-center">
                <Link
                  href={link.link}
                  className={`${styles.socialLinks} text-decoration-none`}
                >
                  <Image
                    src={link.icon}
                    alt={link.title}
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${styles.footerBottom} d-flex align-items-center justify-content-center col`}
      >
        <small className="text-center w-25">
          © Platute Pty Limited, ABN 67 638 488 712 Level 7, 11 York st, Sydney
          NSW 2000, Australia
        </small>
      </div>
    </footer>
  );
};

export default Footer;
