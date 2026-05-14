import { Link } from "react-router-dom";

export default function Navbar() {
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

      <Link to="/favorites" style={{ textDecoration: "none", color: "#555" }}>
        Favorites
      </Link>
    </nav>
  );
}
