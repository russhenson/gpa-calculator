
export const CircleButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`btn circle-btn`}
    >
      {props.icon}
    </button>
  );
};
