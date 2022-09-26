import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

export const CircleButton = (props) => {
  const add = props.btnName === "add" ? true : false;
  return (
    <button
      onClick={props.onClick}
      className={`btn circle-btn ${add ? "add-btn" : "remove-btn"}`}
    >
      {add ? <IoAddOutline size="1.6em" /> : <IoRemoveOutline size="1.6em" />}
    </button>
  );
};
