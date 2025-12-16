const BASE_URL = "https://api.escuelajs.co/api/v1";

export async function fetchProducts({
  title = "",
  offset = 0,
  limit = 20,
  categoryId = "",
}) {
  const url = new URL(`${BASE_URL}/products`);

  if (title) {
    url.searchParams.append("title", title);
  }

  if (categoryId) url.searchParams.append("categoryId", categoryId);

  url.searchParams.append("offset", offset);
  url.searchParams.append("limit", limit);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function fetchCategories() {
  const response = await fetch(`${BASE_URL}/categories`);

  if (!response.ok) throw new Error("Failed to fetch categories");

  return response.json();
}
