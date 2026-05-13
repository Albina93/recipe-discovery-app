const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const API = {
  categories: `${BASE_URL}/categories.php`,
  filterByCategory: (category: string) =>
    `${BASE_URL}/filter.php?c=${category}`,
  recipeById: (id: string) => `${BASE_URL}/lookup.php?i=${id}`,
  searchByName: (name: string) => `${BASE_URL}/search.php?s=${name}`,
};
