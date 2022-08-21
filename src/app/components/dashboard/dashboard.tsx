import * as React from "react";
import { ColorPickerComponent, GridComponent, SwitchButton } from "@components";
import "./dashboard.css";

const DashboardComponent: React.FC = () => {
  const [number, setNumber] = React.useState("");
  const [gridSize, setGridSize] = React.useState("8");
  const [pickedColor, setPickedColor] = React.useState("#ffffff");
  const [isRandom, setIsRandom] = React.useState(true);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNumber(e.currentTarget.value);
  };

  const resetPickedColor = () => {
    setPickedColor("#ffffff");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGridSize(number);
    setNumber("");
    resetPickedColor();
  };
  return (
    <div className="dashboard">
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          className="grid-input"
          name="gridsize"
          type="number"
          value={number}
          placeholder="Enter a number between 1 and 128"
          onChange={handleChange}
        />
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
      <div className="section-wrapper">
        <div className="buttons-container">
          <ColorPickerComponent
            pickedColor={pickedColor}
            setPickedColor={setPickedColor}
          />
          <button
            className="submit-btn"
            type="submit"
            onClick={resetPickedColor}
          >
            Reset
          </button>
          <SwitchButton toggle={isRandom} setToggle={setIsRandom} />
        </div>

        <div className="section-class">
          <GridComponent
            size={parseInt(gridSize)}
            pickedColor={pickedColor}
            resetPickedColor={resetPickedColor}
            isRandom={isRandom}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
