import "../css/style.css";
import { Header } from "./Table/Header";
import { Cell } from "./Table/Cell";
import { CircleButton } from "./Button/CircleButton";
import { Total } from "./Table/Total";
import { ComputeButton } from "./Button/ComputeButton";
import { useState, useEffect } from "react";
import {
  IoAddOutline,
  IoRemoveOutline,
  IoReloadOutline,
  IoTrashOutline
} from "react-icons/io5";

export const ComputationBox = () => {
  const [count, setCount] = useState(0);
  const [unitValues, setUnitValues] = useState([]);
  const [gradeValues, setGradeValues] = useState([]);
  const [totalUnits, setTotalUnits] = useState(0);
  const [gpa, setGpa] = useState(0);

  useEffect(() => {
    setTotalUnits(sum(unitValues));
  }, [unitValues, totalUnits, gradeValues]);

  const handleUnitChange = (i, val) => {
    setUnitValues({
      ...unitValues,
      [i]: val,
    });
  };

  const handleGradeChange = (i, val) => {
    setGradeValues({
      ...gradeValues,
      [i]: val,
    });
  };

  const handleReset = () => {
    setUnitValues(Array(count).fill(0));
    setGradeValues(Array(count).fill(parseFloat("0.0").toFixed(1)))
  };

  const handleDelete = () => {
    handleReset();
    setCount(0);
  };

  const sum = (obj) => {
    let sum = 0;
    for (let el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  };

  const computeGpa = () => {
    let sum = 0;
    for (let el in unitValues) {
      if (unitValues.hasOwnProperty(el)) {
        sum += parseFloat(unitValues[el] * gradeValues[el]);
      }
    }

    setGpa((sum / totalUnits).toFixed(3));
  };

  return (
    <div className="box-container">
      <div className="circle-btn-container">
        <CircleButton
          icon={<IoAddOutline size="1.6em" />} 
          onClick={() => setCount((prev) => prev + 1)}
        />
        <CircleButton
          icon={<IoRemoveOutline size="1.6em" />}
          onClick={() => setCount((prev) => (prev !== 0 ? prev - 1 : prev))}
        />
        <CircleButton icon={<IoReloadOutline size="1.6em" />} onClick={handleReset} />
        <CircleButton icon={<IoTrashOutline size="1.6em" />} onClick={handleDelete} />
      </div>
      <Header />
      <div className="body">
        {[...Array(count)].map((_, i) => (
          <Cell
            key={i}
            index={i + 1}
            unitValue={unitValues[i]}
            gradeValue={gradeValues[i]}
            unitOnChange={(e) => handleUnitChange(i, e.target.value)}
            gradeOnChange={(e) => handleGradeChange(i, e.target.value)}
          />
        ))}
      </div>
      <Total totalCourses={count} totalUnits={totalUnits} gpa={gpa} />
      <ComputeButton onClick={computeGpa} />
    </div>
  );
};
