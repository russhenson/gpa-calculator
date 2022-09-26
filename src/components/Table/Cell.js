export const Cell = (props) => {
  return (
    <div className="cell">
      <input
        onChange={props.courseOnChange}
        className="course-input"
        placeholder={`Course ${props.index}`}
      />
      <div className="grading-input">
        <input
          onChange={props.unitOnChange}
          defaultValue={0}
          value={props.unitValue}
        />
        <input
          defaultValue={parseFloat("0.0").toFixed(1)}
          onChange={props.gradeOnChange}
          value={props.gradeValue}
        />
      </div>
    </div>
  );
};
