import ColorCard from "./ColorCard";

export default function DetailsView({ theme }) {
  return (
    <div>
      {theme.colors.map((color) => (
        <ColorCard color={color} />
      ))}

    </div>
  );
}
