import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import logo from "../../../../public/Images/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  const links = [
    { href: "/", label: "Home" },
    { href: "/search", label: "Search Page" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
  ];

  const [active, setActive] = useState(false);

  return (
    <div
      className={`${styles.navBar} d-flex jusify-content-between align-items-center py-5`}
    >
      <Link href="/">
        <Image src={logo} alt="logo" width={150} />
      </Link>
      <div className="mx-auto">
        <ul
          className={`${
            active ? styles.mobileNavActive : styles.mobileNav
          } nav`}
        >
          {links.map(({ href, label }) => (
            <li
              key={`${href}${label}`}
              className={`${styles.navLinks} ${
                router.pathname === href ? styles.active : ""
              }`}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
          <button
            className={`${styles.closeBtn} d-block d-sm-block d-md-none`}
            onClick={() => setActive(!active)}
          >
            <i className="bi bi-x"></i>
          </button>
        </ul>
      </div>
      <>
        <button className={`${styles.button} d-none d-sm-none d-md-block`}>
          Sign In/Up
        </button>
        <button
          onClick={() => setActive(!active)}
          className={`${styles.menuButton} d-block d-sm-block d-md-none text-dark`}
        >
          <i className="bi bi-list"></i>
        </button>
      </>
    </div>
  );
};

export default Navbar;
