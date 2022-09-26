export const Total = (props) => {
  return (
    <div className="total">
      <h3>Total Courses: <span>{props.totalCourses}</span></h3>
      <div className="grading-total">
        <h3 className="units">Total Units: <span>{isNaN(props.totalUnits) ? 0 : props.totalUnits }</span></h3>
        <h3 className="gpa">GPA: <span>{props.gpa}</span> </h3>
      </div>
    </div>
  );
};
