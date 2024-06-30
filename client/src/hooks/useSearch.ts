import { useEffect, useState } from "react";
import { Search } from "../types/search";

export const useSearch = ({ query }: { query: string }) => {
  const [search, setSearch] = useState<Search | null>(null);
  const [error, setError] = useState<string | unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const searchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}products/search?q=${query}`
        );
        const data = await response.json();
        setSearch(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      setLoading(true);
      searchProducts();
    }
  }, [query]);
  return {
    search,
    error,
    loading,
  };
};
