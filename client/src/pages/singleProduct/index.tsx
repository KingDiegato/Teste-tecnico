import { useParams } from "react-router-dom";
import MockProducts from "../../mock/products.json";
import { NotFound } from "../notFound";

export const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);

  const product = MockProducts.products.find(
    (product) => product.id === Number(id)
  );

  return (
    <>
      {product ? (
        <>
          <p>{id}</p>
          <h1>{product.title}</h1>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};
