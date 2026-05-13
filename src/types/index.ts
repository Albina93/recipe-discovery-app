// What a category looks like from the API
export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

// What a recipe looks like in a list (filter endpoint)
export interface RecipePreview {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strCountry: string;
}

// Full recipe details (lookup endpoint) — has way more fields
export interface RecipeDetail {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strYoutube: string;
  [key: string]: string | null;
}
