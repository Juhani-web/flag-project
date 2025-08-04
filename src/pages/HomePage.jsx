// src/pages/HomePage.jsx
import { useState, useEffect } from "react";
import { fetchAllCountries } from "../api/Countries";
import CountryCard from "../components/CountryCard";

export default function HomePage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchAllCountries();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <p>Loading länder…</p>;
  if (error)   return <p>Fel vid hämtning: {error}</p>;

  return (
    <div className="home-page">
      <h1>Världens Länder</h1>
      <div className="country-grid">
        {countries.map((country) => (
          <CountryCard
            key={country.cca3}
            name={country.name.common}
            flag={country.flags.png}
            code={country.cca3}
          />
        ))}
      </div>
    </div>
  );
}
