import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../common/Button";
import "./Navbar.css";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Programs", href: "#programs" },
  { label: "Resources", href: "#resources" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a
          className="navbar__brand"
          href="#home"
          aria-label="Sallah home"
          onClick={closeMenu}
        >
          <img
            className="navbar__logo"
            src="/images/branding/sallah-logo-light.png"
            alt="Sallah"
            onError={(event) => {
              event.currentTarget.style.display = "none";
              event.currentTarget.nextElementSibling.style.display = "block";
            }}
          />
          <span className="navbar__fallback-logo">
            <span className="navbar__monogram">S</span>
            <span className="navbar__wordmark">
              <strong>Sallah</strong>
              <small>The Student Community</small>
            </span>
          </span>
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="primary-navigation"
          className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              className={`navbar__link ${
                item.label === "Home" ? "navbar__link--active" : ""
              }`}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <Button
            href="#contact"
            variant="light"
            className="navbar__join"
            onClick={closeMenu}
          >
            Join Us
          </Button>
        </nav>
      </div>
    </header>
  );
}
