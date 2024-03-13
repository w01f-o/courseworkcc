import { FC } from "react";
import { IReview } from "types/productTypes";
import ReviewsItem from "./ReviewsItem";

interface ProductReviewsProps {
  reviews: IReview[];
}

const ProductReviews: FC<ProductReviewsProps> = ({ reviews }) => {
  return (
    <div className="product__reviews">
      {reviews.map((review: IReview) => (
        <ReviewsItem {...review} key={review.id} />
      ))}
    </div>
  );
};

export default ProductReviews;
