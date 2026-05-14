import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { API } from "../api/endpoints";
import type { RecipeDetail } from "../types";
import { useFavorites } from "../context/FavoritesContext";

interface RecipeDetailResponse {
  meals: RecipeDetail[] | null;
}

export default function RecipeDetail() {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const { recipeId } = useParams<{ recipeId: string }>();

  const { data, loading, error } = useFetch<RecipeDetailResponse>(
    API.recipeById(recipeId ?? ""),
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!data?.meals || data.meals.length === 0) {
    return <ErrorMessage message="Recipe not found" />;
  }

  const recipe = data.meals[0];

  // Build ingredients list from the API
  const ingredients: { name: string; measure: string }[] = [];
  for (let i = 1; i <= 20; i++) {
    const name = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (name && name.trim() !== "") {
      ingredients.push({
        name: name.trim(),
        measure: (measure ?? "").trim(),
      });
    }
  }

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      <Link to="/" style={{ display: "inline-block", marginBottom: "1rem" }}>
        ⬅️ Back to Categories
      </Link>

      <h1>{recipe.strMeal}</h1>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1rem",
          color: "#666",
        }}
      >
        <span>📂 {recipe.strCategory}</span>
        <span>🌍 {recipe.strArea}</span>
      </div>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "1.5rem",
        }}
      />

      <button
        onClick={() => {
          if (isFavorite(recipe.idMeal)) {
            removeFavorite(recipe.idMeal);
          } else {
            addFavorite(recipe.idMeal);
          }
        }}
      >
        {isFavorite(recipe.idMeal)
          ? "➖ Remove from Favorites"
          : "➕ Add to Favorites"}
      </button>

      <h2>Ingredients</h2>
      <ul style={{ lineHeight: "1.8" }}>
        {ingredients.map((ing, index) => (
          <li key={index}>
            <strong>{ing.measure}</strong> {ing.name}
          </li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}>
        {recipe.strInstructions}
      </p>

      {recipe.strYoutube && (
        <p>
          <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
            Watch on YouTube
          </a>
        </p>
      )}
    </div>
  );
}
