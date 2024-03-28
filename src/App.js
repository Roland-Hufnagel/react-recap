import ColorCard from "./components/ColorCard";
import "./App.css";
import { themes } from "./db";
import Theme from "./components/Theme";

function App() {
  return (
    <main>
      <h1>Theme Creator</h1>
      {themes.map((theme) => (
        <Theme theme={theme} />
      ))}
    </main>
  );
}

export default App;
