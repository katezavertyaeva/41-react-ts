import "./styles.css";
import { ButtonProps } from "./types";

function Button({ name, type = "button", onClick, disabled = false }: ButtonProps) {
  return (
    <button className="button" type={type} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
}

export default Button;
