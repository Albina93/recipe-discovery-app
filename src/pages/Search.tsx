import { useSearchParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RecipeCard from "../components/RecipeCard";
import { API } from "../api/endpoints";
import type { RecipeDetail } from "../types";

interface SearchResponse {
  meals: RecipeDetail[] | null;
}

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const { data, loading, error } = useFetch<SearchResponse>(
    API.searchByName(query),
  );

  if (!query) {
    return (
      <div style={{ padding: "1rem" }}>
        <p>
          Type a recipe name in the search bar above to find recipes.{" "}
          <Link to="/">Or browse categories</Link>.
        </p>
      </div>
    );
  }

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>
        Results for "<em>{query}</em>"
      </h1>

      {!data?.meals || data.meals.length === 0 ? (
        <p>
          No recipes found for "<em>{query}</em>". Try a different search?
        </p>
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
