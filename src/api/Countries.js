// src/api/Countries.js

const BASE_URL = "https://restcountries.com/v3.1/all?fields=name,flags`";

/**
 * Hämta alla länder (name + flags).
 */
export async function fetchAllCountries() {
  const res = await fetch(`${BASE_URL}/all?fields=name,flags,region,cca3`);
  if (!res.ok) {
    throw new Error(`Kunde inte hämta länder: ${res.status}`);
  }
  return res.json();
}

/**
 * Hämta ett land baserat på namn (din detaljerade ruta).
 */
export async function fetchCountryByName(name) {
  const res = await fetch(`${BASE_URL}/name/${encodeURIComponent(name)}?fullText=true`);
  if (!res.ok) {
    throw new Error(`Kunde inte hämta landet ${name}: ${res.status}`);
  }
  const data = await res.json();
  // API returnerar lista, men vi tar första objektet
  return data[0];
}

/**
 * Hämta länder i en region.
 */
export async function fetchCountriesByRegion(region) {
  const res = await fetch(`${BASE_URL}/region/${encodeURIComponent(region)}?fields=name,flags,cca3`);
  if (!res.ok) {
    throw new Error(`Kunde inte hämta regionen ${region}: ${res.status}`);
  }
  return res.json();
}
