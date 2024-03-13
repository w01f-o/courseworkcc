import { starSvg, unActiveStarSvg } from "components/UI/ReviewsStars/svg/svg";
import { FC, useMemo } from "react";
import { getCountArray } from "utils/getCountArray";

interface ReviewsItemProps {
  author: string;
  evaluation: number;
  body: string;
}

const ReviewsItem: FC<ReviewsItemProps> = ({
  author,
  evaluation,
  body,
}): JSX.Element => {
  const starsCountArray = useMemo(() => {
    return getCountArray(evaluation);
  }, [evaluation]);

  const unactiveStarsCountArray = useMemo(() => {
    return getCountArray(5 - evaluation);
  }, [evaluation]);
  return (
    <div className="product__reviews-item">
      <div className="product__reviews-name">
        {author}
        <div className="product__reviews-stars">
          {starsCountArray.map((_item, index) => (
            <span key={index}>{starSvg}</span>
          ))}
          {unactiveStarsCountArray.map((_item, index) => (
            <span key={index}>{unActiveStarSvg}</span>
          ))}
        </div>
      </div>

      <div className="product__reviews-body">{body}</div>
    </div>
  );
};

export default ReviewsItem;
