const BASE_URL = import.meta.env.VITE_API_URL ?? '';

export async function apiGet(path) {
  const response = await fetch(`${BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Erro ${response.status} ao buscar ${path}`);
  }
  return response.json();
}
