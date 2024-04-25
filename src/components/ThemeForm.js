import "./ThemeForm.css";
import ColorPicker from "./ColorPicker";

export default function ThemeForm({ theme, onSubmit, isEditMode }) {
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const data = Object.fromEntries(formData);
  //   console.log(data);
  //   handleAddTheme(data);
  //   event.target.reset();
  // }
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
    event.target.reset();
  }
  return (
    <form className="theme-form" onSubmit={handleSubmit}>
      <h2>{isEditMode ? "Edit this theme" : "Add new theme"}</h2>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        required
        aria-label="theme name"
        defaultValue={theme.name}
      />
      <div className="color-inputs">
        {theme.colors.map((color) => (
          <ColorPicker key={color.role} color={color} />
        ))}
        {/* <input
          id="color1"
          name="color1"
          type="color"
          defaultValue={theme.colors[0].value}
          aria-label="first color input"
        />
        <input
          id="color2"
          name="color2"
          type="color"
          defaultValue={theme.colors[1].value}
          aria-label="second color input"
        />
        <input
          id="color3"
          name="color3"
          type="color"
          defaultValue={theme.colors[2].value}
          aria-label="third color input"
        />
        <input
          id="color4"
          name="color4"
          type="color"
          defaultValue={theme.colors[3].value}
          aria-label="fourth color input"
        /> */}
      </div>
      <button>{isEditMode ? "Update theme" : "Add theme"}</button>
    </form>
  );
}
