import "./App.css";
import { themes as initialThemes } from "./db";
import Theme from "./components/Theme";
import ThemeForm from "./components/ThemeForm";
import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "use-local-storage-state";
//import uuid from "uuid";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });
  async function getColorName(hex) {
    const response = await fetch(
      `https://www.thecolorapi.com/id?hex=${hex.slice(1)}`
    );
    const data = await response.json();
    return data.name.value;
  }
  async function handleAddTheme(theme) {
    const newTheme = {};
    newTheme.id = uuidv4();
    //newTheme.id = uuid.v4();
    newTheme.name = theme.name;
    newTheme.colors = [
      {
        role: "primary",
        value: theme.color1,
        name: await getColorName(theme.color1),
      },
      {
        role: "secondary",
        value: theme.color2,
        name: await getColorName(theme.color2),
      },
      {
        role: "surface",
        value: theme.color3,
        name: await getColorName(theme.color3),
      },
      {
        role: "surface-on",
        value: theme.color4,
        name: await getColorName(theme.color4),
      },
    ];
    newTheme.colors.forEach((color) => {});
    setThemes([newTheme, ...themes]);
  }
  function handleDeleteTheme(id) {
    setThemes(themes.filter((theme) => theme.id !== id));
  }

  return (
    <main>
      <h1>Theme Creator</h1>
      <ThemeForm handleAddTheme={handleAddTheme} />
      {themes.map((theme) => (
        <Theme
          key={theme.id}
          theme={theme}
          handleDeleteTheme={handleDeleteTheme}
        />
      ))}
    </main>
  );
}

export default App;
