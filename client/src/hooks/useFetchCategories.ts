import { useEffect, useState } from "react";

type Categories = Category[] | undefined;

interface Category {
  slug: string;
  name: string;
  url: string;
}

export const useFetchCategories = (): { categories: Categories } => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}products/categories`
      );
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);
  return { categories };
};
