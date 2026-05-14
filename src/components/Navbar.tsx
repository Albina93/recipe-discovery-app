import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      navigate(`/search?query=${encodeURIComponent(trimmed)}`);
      setQuery("");
    }
  };

  return (
    <nav
      style={{
        padding: "1rem",
        borderBottom: "1px solid #f2e3e3",
        backgroundColor: "#fff",
        display: "flex",
        gap: "1.5rem",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{ fontWeight: "bold", textDecoration: "none", color: "#333" }}
      >
        Recipe Discovery
      </Link>

      <form onSubmit={handleSubmit} style={{ flex: 1, maxWidth: "400px" }}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "1rem",
          }}
        />
      </form>

      <Link
        to="/favorites"
        style={{
          textDecoration: "none",
          color: "#555",
          marginLeft: "auto",
        }}
      >
        ⭐️ Favorites
      </Link>
    </nav>
  );
}
