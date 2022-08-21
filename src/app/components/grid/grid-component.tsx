import { GridSquare } from "@components";
import * as React from "react";
import styled from "styled-components";
import "./grid-style.css";

interface GridProps {
  size: number;
  pickedColor: string;
  resetPickedColor: Function;
  isRandom: boolean;
}

const GridComponent: React.FC<GridProps> = ({
  size,
  pickedColor,
  resetPickedColor,
  isRandom,
}) => {
  const [gridArray, setGridArray] = React.useState([]);

  const grid = () => {
    let gridElementsArray: JSX.Element[] = [];
    for (let i = 0; i < size * size; i++) {
      const gridElement = (
        <GridSquare pickedColor={pickedColor} isRandom={isRandom} key={i} />
      );
      gridElementsArray.push(gridElement);
    }
    setGridArray(gridElementsArray);
  };

  React.useEffect(() => {
    grid();
  }, [size, pickedColor, isRandom]);

  document.documentElement.style.setProperty(
    "--grid-columns",
    `repeat(${size}, 1fr)`
  );

  return <div className="container">{...gridArray}</div>;
};

export default GridComponent;
