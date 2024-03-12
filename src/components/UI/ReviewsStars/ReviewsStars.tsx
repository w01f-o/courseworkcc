import { FC, useMemo } from "react";
import { getCountArray } from "utils/getCountArray";

interface ReviewsStarsProps {
  evaluation: number[];
}

const starSvg = (
  <svg
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
      fill="black"
    />
  </svg>
);

const unActiveStar = (
  <svg
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 1.61803L8.70833 5.33688L8.82058 5.68237H9.18386H13.0941L9.93064 7.98075L9.63675 8.19427L9.74901 8.53976L10.9573 12.2586L7.79389 9.96024L7.5 9.74671L7.20611 9.96024L4.04267 12.2586L5.25099 8.53976L5.36325 8.19427L5.06936 7.98075L1.90592 5.68237H5.81614H6.17942L6.29167 5.33688L7.5 1.61803Z"
      fill="#F1F1F1"
      stroke="black"
    />
  </svg>
);

const ReviewsStars: FC<ReviewsStarsProps> = ({ evaluation }): JSX.Element => {
  const averageEvaluation = useMemo(() => {
    return Math.round(
      evaluation.reduce((acc, item) => acc + item, 0) / evaluation.length
    );
  }, [evaluation]);

  const countArray = useMemo(() => {
    return getCountArray(averageEvaluation);
  }, [averageEvaluation]);

  const unActiveCountArray = useMemo(() => {
    return getCountArray(5 - averageEvaluation);
  }, [averageEvaluation]);

  return (
    <div className="stars">
      {countArray.map(item => (
        <span key={item}>{starSvg}</span>
      ))}
      {unActiveCountArray.map(item => (
        <span key={item}>{unActiveStar}</span>
      ))}
      ({evaluation.length})
    </div>
  );
};

export default ReviewsStars;
