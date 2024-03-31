import ColorCard from "./ColorCard";

export default function DetailsView({ theme }) {
  return (
    <div>
      {theme.colors.map((color) => (
        <ColorCard key={color.role} color={color} />
      ))}
    </div>
  );
}
