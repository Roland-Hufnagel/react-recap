import "./App.css";
import { themes as initialThemes } from "./db";
import Theme from "./components/Theme";
import ThemeForm from "./components/ThemeForm";
import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "use-local-storage-state";
//import uuid from "uuid";
const blankTheme = {
  name: "",
  colors: [
    {
      role: "primary",
      value: "#57886C",
      name: "Viridian",
    },
    {
      role: "secondary",
      value: "#F8C7CC",
      name: "Tea Rose",
    },
    {
      role: "surface",
      value: "#FDEDEE",
      name: "Lavender Blush",
    },
    {
      role: "surface-on",
      value: "#0E0F19",
      name: "Rich Black",
    },
  ],
};
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
  async function handleAddTheme(formData) {
    const newTheme = {};
    newTheme.id = uuidv4();
    //newTheme.id = uuid.v4();
    newTheme.name = formData.name;
    newTheme.colors = [
      {
        role: "primary",
        value: formData.primary,
        // name: await getColorName(theme.color1),
      },
      {
        role: "secondary",
        value: formData.secondary,
        // name: await getColorName(theme.color2),
      },
      {
        role: "surface",
        value: formData.surface,
        // name: await getColorName(theme.color3),
      },
      {
        role: "surface-on",
        value: formData["surface-on"],
        // name: await getColorName(theme.color4),
      },
    ];
    setThemes([newTheme, ...themes]);
  }
  function handleDeleteTheme(id) {
    setThemes(themes.filter((theme) => theme.id !== id));
  }
  function handleEditTheme(data, id) {
    const colors = [
      {
        role: "primary",
        value: data.primary,
        // name: await getColorName(theme.color1),
      },
      {
        role: "secondary",
        value: data.secondary,
        // name: await getColorName(theme.color2),
      },
      {
        role: "surface",
        value: data.surface,
        // name: await getColorName(theme.color3),
      },
      {
        role: "surface-on",
        value: data["surface-on"],
        // name: await getColorName(theme.color4),
      },
    ];
    setThemes(
      themes.map((theme) =>
        theme.id === id ? { ...theme, colors: colors, name: data.name } : theme
      )
    );
  }

  return (
    <main>
      <h1>Theme Creator</h1>
      <ThemeForm onSubmit={handleAddTheme} theme={blankTheme} />
      {themes.map((theme) => (
        <Theme
          key={theme.id}
          theme={theme}
          handleDeleteTheme={handleDeleteTheme}
          handleEditTheme={handleEditTheme}
        />
      ))}
    </main>
  );
}

export default App;
