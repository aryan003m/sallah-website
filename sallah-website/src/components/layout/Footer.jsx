const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Programs", href: "#programs" },
  { label: "Resources", href: "#resources" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <a className="site-footer__brand" href="#home">
          Sallah
        </a>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} Sallah Student Community
        </p>
      </div>
    </footer>
  );
}
