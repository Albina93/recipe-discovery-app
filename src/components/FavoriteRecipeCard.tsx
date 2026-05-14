import useFetch from "../hooks/useFetch";
import RecipeCard from "./RecipeCard";
import Spinner from "./Spinner";
import { API } from "../api/endpoints";
import type { RecipeDetail } from "../types";

interface FavoriteRecipeCardProps {
  id: string;
}

interface RecipeResponse {
  meals: RecipeDetail[] | null;
}

export default function FavoriteRecipeCard({ id }: FavoriteRecipeCardProps) {
  const { data, loading, error } = useFetch<RecipeResponse>(API.recipeById(id));

  if (loading) return <Spinner />;
  if (error || !data?.meals || data.meals.length === 0) return null;

  const recipe = data.meals[0];

  return (
    <RecipeCard
      id={recipe.idMeal}
      name={recipe.strMeal}
      image={recipe.strMealThumb}
    />
  );
}
