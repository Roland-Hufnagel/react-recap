import ColorCard from "./components/ColorCard";
import "./App.css";
import { themes } from "./db";

function App() {
  return (
    <main>
      <h1>Theme Creator</h1>
      <h2>{themes[0].name}</h2>
      {themes[0].colors.map((color) => (
        <ColorCard key={color.id} color={color} />
      ))}
    </main>
  );
}

export default App;
