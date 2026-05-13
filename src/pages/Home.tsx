import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { API } from "../api/endpoints";
import type { Category } from "../types";
import { Link } from "react-router-dom";

interface CategoriesResponse {
  categories: Category[];
}

export default function Home() {
  const { data, loading, error } = useFetch<CategoriesResponse>(API.categories);
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!data) return null;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>All Recipe Categories</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        {data.categories.map((cat) => (
          <Link
            key={cat.idCategory}
            to={`/category/${cat.strCategory}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #f2e3e3",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#f4e0e0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
          >
            <img src={cat.strCategoryThumb} alt={cat.strCategory} />
            <div style={{ padding: "0.75rem" }}>
              <h3 style={{ margin: 0 }}>{cat.strCategory}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
