import { useParams } from "react-router-dom";
import { NotFound } from "../notFound";
import * as SingleProductStyles from "./styles";
import { useFetchSingleProduct } from "../../hooks/useFetchSingleProduct";
import { Rating } from "react-simple-star-rating";
import { AddToCart } from "../productList/components/productMap/addItemToCart";
import { AddToFavorite } from "../productList/components/productMap/addItemToWishList";
import { Toaster } from "sonner";

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
        <>
          <SingleProductStyles.SingleProductSection>
            <div>
              <img
                src={productToShown.thumbnail}
                alt={"Thumbnail for " + productToShown.title}
              />
            </div>
            <SingleProductStyles.ProductDetails>
              <h2>{productToShown.title}</h2>
              <h4 style={{ color: "#888" }}>
                <i>{productToShown.tags}</i>
              </h4>
              <p>{productToShown.description}</p>
              <p>
                <b>Category: {productToShown.category}</b>
              </p>
              <p>
                <span style={{ color: "red" }}>
                  R$ - <s>{productToShown.price}</s>-{" "}
                </span>
              </p>
              <p style={{ fontSize: "1.5rem" }}>
                R$ -{" "}
                {(
                  productToShown.price -
                  (productToShown.price * productToShown.discountPercentage) /
                    100
                ).toFixed(2)}{" "}
                <span style={{ color: "gray", fontSize: "1rem" }}>
                  {" "}
                  - {productToShown.discountPercentage}% off
                </span>
              </p>

              <p>- {productToShown.stock} em estoque</p>
              <div>
                <Rating
                  readonly
                  initialValue={productToShown.rating}
                  size={20}
                />{" "}
                <span>{productToShown.rating}</span>
              </div>
            </SingleProductStyles.ProductDetails>
            <SingleProductStyles.AsideProduct>
              <AddToFavorite product={productToShown} />
              <AddToCart product={productToShown} />
            </SingleProductStyles.AsideProduct>
          </SingleProductStyles.SingleProductSection>
          <SingleProductStyles.SingleProductSection>
            <div className="reviews">
              <h3>Reviews</h3>
              <ul>
                {productToShown.reviews.map((review) => (
                  <SingleProductStyles.SingleReview
                    key={review.reviewerEmail + review.reviewerName}
                  >
                    <div>
                      <h4>
                        {review.reviewerName}{" "}
                        <span style={{ color: "gray" }}>
                          {review.reviewerEmail}
                        </span>
                      </h4>
                      <Rating readonly initialValue={review.rating} size={20} />{" "}
                      <span>{review.rating}</span>
                    </div>
                    <p>{new Date(review.date).toLocaleDateString()}</p>
                    <p>{review.comment}</p>
                  </SingleProductStyles.SingleReview>
                ))}
              </ul>
            </div>
          </SingleProductStyles.SingleProductSection>
        </>
      )}
      {error === "404" && <NotFound />}
      <Toaster
        richColors
        position="top-center"
        toastOptions={{ style: { padding: "1rem", borderRadius: "0.5rem" } }}
      />
    </SingleProductStyles.SingleProductContainer>
  );
};
