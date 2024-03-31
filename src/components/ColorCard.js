import { useEffect, useState } from "react";
import "./ColorCard.css";

export default function ColorCard({ color }) {
  const [colorName, setColorName] = useState("");
  useEffect(() => {
    async function fetchColorName() {
      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${color.value.slice(1)}`
      );
      const data = await response.json();
      setColorName(data.name.value);
    }
    fetchColorName();
  }, []);
  return (
    <>
      <section className="card">
        <div className="card--info">
          <h2>{color.role}</h2>
          <p>{color.value}</p>
          <p>{colorName}</p>
          {/* <p>{color.name}</p> */}
        </div>
        <div
          className="color"
          style={{ backgroundColor: `${color.value}` }}
        ></div>
      </section>
    </>
  );
}
