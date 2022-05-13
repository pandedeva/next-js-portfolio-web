import Link from "next/link";
import { withRouter } from "next/router";

function Navbar({ router }) {
  const navs = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link href="/">
            <a className="logo">*^!</a>
          </Link>

          <ul className="nav-links">
            {navs.map((nav) => {
              return (
                <li key={nav.href}>
                  <Link href={nav.href}>
                    {/* check class active */}
                    <a className={`nav-item ${router.pathname === nav.href ? "active" : ""}`}>{nav.text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default withRouter(Navbar);
