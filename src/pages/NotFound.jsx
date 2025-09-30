import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="error-page">
      <h1>404- Sidan kunde inte hittas</h1>…
      <p>
        Hoppa tillbaka till <Link to="/">hemsidan</Link>.
      </p>
    </div>
  );
}
