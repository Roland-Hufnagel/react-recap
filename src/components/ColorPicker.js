import { useState } from "react";
import "./ColorPicker.css";

export default function ColorPicker({ color }) {
  const [colorValue, setColorValue] = useState(color.value);
  function handleChangeColor(event) {
    setColorValue(event.target.value);
  }

  return (
    <fieldset>
      <input
        id={color.role}
        name={color.role}
        type="color"
        value={colorValue}
        onChange={handleChangeColor}
        aria-label={color.role}
      />
      <input
        type="text"
        name={`${color.role}-hex`}
        value={colorValue}
        onChange={handleChangeColor}
      />
    </fieldset>
  );
}
