import * as React from "react";
import "./color-picker.css";

interface ColorPickerProps {
  pickedColor: string;
  setPickedColor: Function;
}

const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  const { pickedColor, setPickedColor } = props;

  return (
    <div className="color-picker-container">
      <div className="color-picker-text">Pick a Color</div>
      <input
        type="color"
        className="color-picker"
        value={pickedColor}
        onChange={(e) => setPickedColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
