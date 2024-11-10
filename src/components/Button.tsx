import { ButtonType } from "../interfaces/Interface.Components";

const ButtonComponent = ({ style, onClick, title }: ButtonType) => {
  return (
    <button className={style} onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonComponent;
