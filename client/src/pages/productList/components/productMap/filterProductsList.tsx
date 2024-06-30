import { useFetchProducts } from "../../../../hooks/useFetchProducts";
import { ProductList } from "../../../../components/productList";

export const FilterProductsList = () => {
  const { products } = useFetchProducts({
    url: `${import.meta.env.VITE_API_URL}products`,
  });
  if (!products) return <div>Loading...</div>;

  const productToShown = products?.products;

  return (
    <>
      <ProductList products={productToShown} />
    </>
  );
};
