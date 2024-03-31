import "./TestPage.css";
export default function TestPage({ closeTestPage, theme }) {
  return (
    <div
      className="container"
      style={{
        "--primary": theme.colors[0].value,
        "--secondary": theme.colors[1].value,
        "--surface": theme.colors[2].value,
        "--surfaceOn": theme.colors[3].value,
      }}
    >
      <button onClick={closeTestPage}>CLOSE</button>
      <h1>{theme.name}</h1>
      <p className="surface">Lorem ypsum bla bla bla</p>
      <div className="contained button">Contained</div>
      <div className="outline button">Outline</div>
      <div className="primary button">Primary</div>
      <div className="secondary button">Secondary</div>
    </div>
  );
}
