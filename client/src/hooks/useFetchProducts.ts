import { useEffect, useState } from "react";
import { Product } from "../types/product";

interface IProducts {
  products: Product[];
}

export const useFetchProducts = ({
  url,
}: {
  url: string;
}): { products: IProducts | null } => {
  const [products, setProducts] = useState<IProducts | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
    // const response = fetch(url).then((response) => response.json());
    // response.then((data) => setProducts(data)).catch((err) => {throw new Error(err)});
  }, [url]);

  return { products };
};
