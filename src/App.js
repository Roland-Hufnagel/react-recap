import "./App.css";
import { themes as initialThemes } from "./db";
import Theme from "./components/Theme";
import ThemeForm from "./components/ThemeForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//import uuid from "uuid";

function App() {
  const [themes, setThemes] = useState(initialThemes);
  console.log(themes);
  function handleAddTheme(theme) {
    const newTheme = {};
    newTheme.id = uuidv4();
    //newTheme.id = uuid.v4();
    newTheme.name = theme.name;
    newTheme.colors = [
      { role: "primary", value: theme.color1 },
      { role: "secondary", value: theme.color2 },
      { role: "surface", value: theme.color3 },
      { role: "surface-on", value: theme.color4 },
    ];
    setThemes([newTheme, ...themes]);
  }

  return (
    <main>
      <h1>Theme Creator</h1>
      <ThemeForm handleAddTheme={handleAddTheme} />
      {themes.map((theme) => (
        <Theme key={theme.id} theme={theme} />
      ))}
    </main>
  );
}

export default App;
