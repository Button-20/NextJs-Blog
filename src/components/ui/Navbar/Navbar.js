import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../../../public/Images/logo.png";

const Navbar = ({ styles }) => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/search", label: "Search Page" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
    ];
    
    const router = useRouter();

  return (
    <div
      className={`${styles.navBar} d-flex jusify-content-between align-items-center py-5`}
    >
      <Link href="/">
        <Image src={logo} alt="logo" width={150} />
      </Link>
      <div className="mx-auto">
        <ul className="nav">
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
        </ul>
      </div>
      <button className={styles.button}>Sign In/Up</button>
    </div>
  );
};

export default Navbar;
