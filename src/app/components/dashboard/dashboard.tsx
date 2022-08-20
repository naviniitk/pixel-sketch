import * as React from "react";
import { GridComponent } from "@components";
import "./dashboard.css"

const DashboardComponent: React.FC = () => {
  const [number, setNumber] = React.useState("");
  const [gridSize, setGridSize] = React.useState("8");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("number here", number);
    setGridSize(number);
    setNumber("");
  };
  return (
    <div className="dashboard">
      <form onSubmit={handleSubmit}>
        <input
          name="gridsize"
          type="number"
          value={number}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>

      <div className="section-class">
        <GridComponent size={parseInt(gridSize)} />
      </div>
    </div>
  );
};

export default DashboardComponent;
