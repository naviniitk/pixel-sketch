import { GridSquare } from "@components";
import * as React from "react";
import "./grid-style.css";

interface GridProps {
  size: number;
}

const GridComponent: React.FC<GridProps> = ({ size }) => {
  const [gridArray, setGridArray] = React.useState([]);
  const grid = () => {
    let gridElementsArray: JSX.Element[] = [];
    for (let i = 0; i < size * size; i++) {
      const gridElement = <GridSquare key={i}></GridSquare>;
      gridElementsArray.push(gridElement);
    }
    setGridArray(gridElementsArray);
  };

  React.useEffect(() => {
    grid();
  }, [size]);

  return (
    <div
      className="container"
      style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
    >
      {...gridArray}
    </div>
  );
};

export default GridComponent;
