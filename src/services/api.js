// services/api.js

export const getProducts = async () => {
  const response = await fetch(
    "https://dummyjson.com/products"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response.json();
};