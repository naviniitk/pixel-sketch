import * as React from "react";
import "./switch-button.css"

interface SwitchButtonProps {
  toggle: boolean;
  setToggle: Function;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ toggle, setToggle }) => {
  const handleChange = () => {
    setToggle(!toggle);
  };

  return (
    <div className="switch-container">
      <span className="random-color-text">Generate Random Colors</span>
      <label className="switch">
      <input type="checkbox" checked={toggle} onChange={handleChange} />
      <span className="slider round"></span>
    </label>
    </div>
    
  );
};

export default SwitchButton;
