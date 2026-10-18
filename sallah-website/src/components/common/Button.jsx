
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  href,
  variant = "light",
  showArrow = false,
  className = "",
  onClick,
  ...props
}) {
  const classes = [
    "site-button",
    `site-button--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight size={15} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type="button"
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
