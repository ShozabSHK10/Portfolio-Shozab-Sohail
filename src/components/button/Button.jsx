import "./Button.css";

function Button({ text, link = "#" }) {
  return (
    <a
      href={link}
      className="button"
      data-text={text}
    >
      <span>{text}</span>
    </a>
  );
}

export default Button;