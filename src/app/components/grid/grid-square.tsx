import * as React from "react";

const SquareComponent: React.FC = () => {
  const [color, setColor] = React.useState("white");
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1) {
      setColor("black");
    }
  };
  const handleClick = () => {
    setColor("black");
  };
  return (
    <div
      className="gridsquare"
      style={{ backgroundColor: color }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    ></div>
  );
};

export default SquareComponent;
