import "./ThemeForm.css";

export default function ThemeForm({ handleAddTheme }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    handleAddTheme(data);
    event.target.reset();
  }

  return (
    <form className="theme-form" onSubmit={handleSubmit}>
      <h2>Add a theme</h2>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        required
        aria-label="theme name"
      />
      <div className="color-inputs">
        <input
          id="color1"
          name="color1"
          type="color"
          defaultValue="#fa46e2"
          aria-label="first color input"
        />
        <input
          id="color2"
          name="color2"
          type="color"
          defaultValue="#2d4f9a"
          aria-label="second color input"
        />
        <input
          id="color3"
          name="color3"
          type="color"
          defaultValue="#44c922"
          aria-label="third color input"
        />
        <input
          id="color4"
          name="color4"
          type="color"
          defaultValue="#cc94a1"
          aria-label="fourth color input"
        />
      </div>
      <button>Add theme</button>
    </form>
  );
}
