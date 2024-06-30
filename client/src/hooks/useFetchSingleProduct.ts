import { useEffect, useState } from "react";
import { Product } from "../types/product";

interface FnReturn {
  products: Product | null;
  error: string | unknown;
  loading: boolean;
}

export const useFetchSingleProduct = ({ url }: { url: string }): FnReturn => {
  const [products, setProducts] = useState<Product | null>(null);
  const [error, setError] = useState<string | unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
    // const response = fetch(url).then((response) => response.json());
    // response.then((data) => setProducts(data)).catch((err) => {throw new Error(err)});
  }, [url]);

  return { products, error, loading };
};
