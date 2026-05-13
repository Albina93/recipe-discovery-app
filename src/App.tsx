import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";
import useFetch from "./hooks/useFetch";
import { API } from "./api/endpoints";
import type { Category } from "./types";

function App() {
  const { data, loading, error } = useFetch<{ categories: Category[] }>(
    API.categories,
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1>Test</h1>
      <ul>
        {data?.categories.map((cat) => (
          <li key={cat.idCategory} style={{ padding: "1rem" }}>
            {cat.strCategory} - {cat.strCategoryDescription}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
