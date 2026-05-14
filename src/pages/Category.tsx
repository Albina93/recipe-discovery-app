import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RecipeCard from "../components/RecipeCard";
import { API } from "../api/endpoints";
import type { RecipePreview } from "../types";

interface CategoryResponse {
  meals: RecipePreview[] | null;
}

export default function Category() {
  const { categoryName } = useParams<{ categoryName: string }>();

  if (!categoryName) return <ErrorMessage message="No category provided" />;
  const { data, loading, error } = useFetch<CategoryResponse>(
    API.filterByCategory(categoryName),
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <div>
      <Link to="/">⬅️ Back to Categories</Link>
      <h1>Recipe for {categoryName}</h1>
      {!data?.meals || data.meals.length === 0 ? (
        <p>No recipes found in this category.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          {data.meals.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              id={recipe.idMeal}
              name={recipe.strMeal}
              image={recipe.strMealThumb}
            />
          ))}
        </div>
      )}
    </div>
  );
}
