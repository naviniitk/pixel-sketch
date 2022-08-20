import { GridSquare } from "@components";
import * as React from "react";
import styled from "styled-components";
import "./grid-style.css";

interface GridProps {
  size: number;
}

const GridComponent: React.FC<GridProps> = ({ size }) => {
  const [gridArray, setGridArray] = React.useState([]);
  const grid = () => {
    let gridElementsArray: JSX.Element[] = [];
    for (let i = 0; i < size * size; i++) {
      document.documentElement.className = `gridsquare-${i}`;
      document.documentElement.style.setProperty(`--grid-square-color-${i}`, '#fff');
      const gridElement = <GridSquare squareNumber={i} key={i}></GridSquare>;
      gridElementsArray.push(gridElement);
    }
    setGridArray(gridElementsArray);
  };

  React.useEffect(() => {
    grid();
  }, [size]);

  document.documentElement.style.setProperty(
    "--grid-columns",
    `repeat(${size}, 1fr)`
  );

  return <div className="container">{...gridArray}</div>;
};

export default GridComponent;
