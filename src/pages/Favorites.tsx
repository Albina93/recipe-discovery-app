import { useFavorites } from "../context/FavoritesContext";
import FavoriteRecipeCard from "../components/FavoriteRecipeCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Your Favorite Recipes</h1>

      {favorites.length === 0 ? (
        <p>Ooops, you haven't saved any favorites yet. </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          {favorites.map((id) => (
            <FavoriteRecipeCard key={id} id={id} />
          ))}
        </div>
      )}
    </div>
  );
}
