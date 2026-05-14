import { Link } from "react-router-dom";

interface RecipeCardProps {
  id: string;
  name: string;
  image: string;
}

export default function RecipeCard({ id, name, image }: RecipeCardProps) {
  return (
    <Link
      to={`/recipe/${id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        border: "1px solid #f2e3e3",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#f4e0e0",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        display: "block",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          display: "block",
        }}
      />
      <div style={{ padding: "0.75rem" }}>
        <h3 style={{ margin: 0, fontSize: "1rem" }}>{name}</h3>
      </div>
    </Link>
  );
}
