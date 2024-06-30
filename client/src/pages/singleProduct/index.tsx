import { useParams } from "react-router-dom";
import { NotFound } from "../notFound";
import * as SingleProductStyles from "./styles";
import { useFetchSingleProduct } from "../../hooks/useFetchSingleProduct";
import { Rating } from "react-simple-star-rating";

export const SingleProduct = () => {
  const { id } = useParams();

  const { products, error, loading } = useFetchSingleProduct({
    url: `${import.meta.env.VITE_API_URL}products/${id}`,
  });

  const productToShown = products ? products : null;
  console.log(productToShown);
  return (
    <SingleProductStyles.SingleProductContainer>
      {loading && <div>Loading...</div>}
      {productToShown && (
        <ul key={productToShown.id}>
          <li>{productToShown.title}</li>
          <li>{productToShown.description}</li>
          <li>{productToShown.price}</li>
          <li>{productToShown.rating}</li>
          <li>{productToShown.category}</li>
          <img
            src={productToShown.thumbnail}
            alt={"Thumbnail for " + productToShown.title}
          />
          {productToShown.images.map((url) => (
            <img
              src={url}
              alt={"Images for " + productToShown.title}
              key={url}
            />
          ))}

          {productToShown.description}
          {productToShown.price}
          {productToShown.rating}
          <section>
            <h3>Reviews</h3>
            <ul>
              {productToShown.reviews.map((review) => (
                <li key={review.reviewerEmail + review.reviewerName}>
                  <h4>{review.reviewerName}</h4>
                  <p>{review.comment}</p>
                  <Rating
                    readonly
                    initialValue={review.rating}
                    size={20}
                  />{" "}
                  <span>{review.rating}</span>
                </li>
              ))}
            </ul>
          </section>
        </ul>
      )}
      {error === "404" && <NotFound />}
    </SingleProductStyles.SingleProductContainer>
  );
};
