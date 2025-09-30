const BASE_URL = "https://restcountries.com/v3.1";

export async function fetchAllCountries() {
  const res = await fetch(
    `${BASE_URL}/all?fields=name,flags,region,population,cca3`
  );
  if (!res.ok) {
    throw new Error(`Kunde inte hämta länder: ${res.status}`);
  }
  return res.json();
}

export async function fetchCountryByName(name) {
  const res = await fetch(
    `${BASE_URL}/name/${encodeURIComponent(name)}?fullText=true`
  );
  if (!res.ok) {
    throw new Error(`Kunde inte hämta landet ${name}: ${res.status}`);
  }
  const data = await res.json();
  return data[0];
}

export async function fetchCountriesByRegion(region) {
  const res = await fetch(
    `${BASE_URL}/region/${encodeURIComponent(
      region
    )}?fields=name,flags,cca3,population`
  );
  if (!res.ok) {
    throw new Error(`Kunde inte hämta regionen ${region}: ${res.status}`);
  }
  return res.json();
}

export async function fetchCountryByCode(code) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  if (!res.ok) throw new Error("Kunde inte hämta land");
  return res.json();
}
