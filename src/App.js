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
  // async function getColorName(hex) {
  //   const response = await fetch(
  //     `https://www.thecolorapi.com/id?hex=${hex.slice(1)}`
  //   );
  //   const data = await response.json();
  //   return data.name.value;
  // }
  async function getColors(...colors) {
    const responsePromises = colors.map((color) =>
      fetch(`https://www.thecolorapi.com/id?hex=${color.slice(1)}`)
    );
    const responses = await Promise.all(responsePromises);
    const dataPromises = responses.map((response) => response.json());
    const results = await Promise.all(dataPromises);
    const names = results.map((result) => result.name.value);
    const colorArray = [
      {
        role: "primary",
        value: colors[0],
        name: names[0],
      },
      {
        role: "secondary",
        value: colors[1],
        name: names[1],
      },
      {
        role: "surface",
        value: colors[2],
        name: names[2],
      },
      {
        role: "surface-on",
        value: colors[3],
        name: names[3],
      },
    ];
    console.log(colorArray);

    return colorArray;
  }

  async function handleAddTheme(formData) {
    console.log(formData);
    // const names = await getColors(
    //   formData.primary,
    //   formData.secondary,
    //   formData.surface,
    //   formData["surface-on"]
    // );
    const newTheme = {};
    newTheme.id = uuidv4();
    //newTheme.id = uuid.v4();
    newTheme.name = formData.name;
    newTheme.colors = await getColors(
      formData.primary,
      formData.secondary,
      formData.surface,
      formData["surface-on"]
    );
    setThemes([newTheme, ...themes]);
  }
  function handleDeleteTheme(id) {
    setThemes(themes.filter((theme) => theme.id !== id));
  }
  async function handleEditTheme(data, id) {
    console.log(data);
    const colors = await getColors(
      data.primary,
      data.secondary,
      data.surface,
      data["surface-on"]
    );
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
