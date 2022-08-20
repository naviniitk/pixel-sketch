import * as React from "react";

interface SquareProps {
  squareNumber: number;
  squareColor?: string;
}

const SquareComponent: React.FC<SquareProps> = (props) => {
  const { squareNumber, squareColor } = props;
  console.log("square component");
  const [color, setColor] = React.useState("white");
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1) {
      setColor("black");
    }
  };

  React.useEffect(() => {
    const element = document.querySelectorAll(
      `.gridsquare-${squareNumber}`
    ) as NodeListOf<HTMLElement>;
    element.forEach((el) => (el.style.backgroundColor = color));
  }, [color]);

  const handleClick = () => {
    setColor("black");
  };
  return (
    <div
      id={`gridsquare-${squareNumber}`}
      className={`gridsquare gridsquare-${squareNumber}`}
      onMouseMove={handleMouseMove}
      onMouseOver={handleMouseMove}
      onClick={handleClick}
    ></div>
  );
};

export default SquareComponent;
