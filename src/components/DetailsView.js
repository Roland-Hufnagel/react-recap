import ColorCard from "./ColorCard";

export default function DetailsView({ theme, handleDeleteTheme }) {
  return (
    <div>
      <button onClick={() => handleDeleteTheme(theme.id)}>DELETE</button>
      {theme.colors.map((color) => (
        <ColorCard key={color.role} color={color} />
      ))}
    </div>
  );
}
