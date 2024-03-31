import { useState } from "react";
import ColorCard from "./ColorCard";
import ThemeForm from "./ThemeForm";

export default function DetailsView({
  theme,
  handleDeleteTheme,
  handleEditTheme,
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  //function handleEditTheme() {}
  return (
    <div>
      <button onClick={() => handleDeleteTheme(theme.id)}>DELETE</button>
      <button onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "CANCEL" : "EDIT"}
      </button>
      {!isEditMode &&
        theme.colors.map((color) => (
          <ColorCard key={color.role} color={color} />
        ))}
      {isEditMode && (
        <ThemeForm
          onSubmit={(themeToUpdate) => {
            handleEditTheme(themeToUpdate, theme.id);
            setIsEditMode(false);
          }}
          theme={theme}
          isEditMode
        />
      )}
    </div>
  );
}
