import "./ColorCard.css";

export default function ColorCard({ color }) {
  return (
    <>
      <section className="card">
        <div className="info">
          <h2>{color.role}</h2>
          <p>{color.value}</p>
        </div>
        <div className="color" style={{backgroundColor: `${color.value}`}}></div>
      </section>
    </>
  );
}
