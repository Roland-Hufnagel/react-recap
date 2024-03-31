import "./Preview.css";

export default function Preview({ theme }) {
  return (
    <div className="preview">
      {theme.colors.map((color) => (
        <div
          className="colorBox"
          key={color.role}
          style={{ backgroundColor: `${color.value}` }}
        ></div>
      ))}
    </div>
  );
}
