import "./Button.css";

function Button({ text, link = "#", onClick }) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <a href={link} className="button" data-text={text} onClick={handleClick}>
      <span>{text}</span>
    </a>
  );
}

export default Button;
