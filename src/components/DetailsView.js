import { useState } from "react";
import ColorCard from "./ColorCard";
import ThemeForm from "./ThemeForm";
import TestPage from "./TestPage";

export default function DetailsView({
  theme,
  handleDeleteTheme,
  handleEditTheme,
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isTestMode, setIsTestMode] = useState(false);
  function handleCloseTestPage() {
    setIsTestMode(false);
  }
  if (isTestMode) {
    return <TestPage closeTestPage={handleCloseTestPage} theme={theme} />;
  }
  return (
    <div>
      <button onClick={() => handleDeleteTheme(theme.id)}>DELETE</button>
      <button onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "CANCEL" : "EDIT"}
      </button>
      <button onClick={() => setIsTestMode(true)}>TRY</button>
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
