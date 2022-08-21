import * as React from "react";
import styled from "styled-components";

interface StyledGridSquareProp {
  squareColor: string;
}

const StyledGridSquare = styled.div`
  background-color: ${(props: StyledGridSquareProp) => props.squareColor};
`;

interface SquareProps {
  pickedColor: string;
  isRandom: boolean;
}

const SquareComponent: React.FC<SquareProps> = ({ pickedColor, isRandom }) => {
  const [color, setColor] = React.useState("white");
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1) {
      if (isRandom) {
        setColor(randomColor);
      } else {
        setColor(pickedColor);
      }
    }
  };

  return (
    <StyledGridSquare
      squareColor={color}
      className="gridsquare"
      onMouseMove={handleMouseMove}
      onMouseOver={handleMouseMove}
      onClick={handleMouseMove}
    ></StyledGridSquare>
  );
};

export default SquareComponent;
