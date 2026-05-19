/**
 * Fetches all countries from the backend
 * @returns Array of countries with id, name, and code
 */
export async function getCountries() {
  const response = await fetch("/api/getCountries");

  console.log(response.status, response.ok);

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }
  const data = await response.json();
  return data;
}
