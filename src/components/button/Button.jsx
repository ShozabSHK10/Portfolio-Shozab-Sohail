import "./Button.css";

function Button({
  text,
  link = "#",
  onClick,
  disabled = false,
}) {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <a
      href={disabled ? "#" : link}
      className={`button ${disabled ? "button-disabled" : ""}`}
      data-text={text}
      onClick={handleClick}
      aria-disabled={disabled}
      title={disabled ? "Coming soon" : ""}
    >
      <span>{text}</span>
    </a>
  );
}

export default Button;