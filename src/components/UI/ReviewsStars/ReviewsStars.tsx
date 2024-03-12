import { FC, useMemo } from "react";
import { getCountArray } from "utils/getCountArray";

interface ReviewsStarsProps {
  evaluation: number[];
}

const starsSvg = (
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

const ReviewsStars: FC<ReviewsStarsProps> = ({ evaluation }): JSX.Element => {
  const averageEvaluation = useMemo(() => {
    return Math.floor(
      evaluation.reduce((acc, item) => acc + item, 0) / evaluation.length
    );
  }, [evaluation]);

  const countArray = useMemo(() => {
    return getCountArray(averageEvaluation);
  }, [averageEvaluation]);

  return (
    <div className="stars">
      {countArray.map(item => (
        <span key={item}>{starsSvg}</span>
      ))}
    </div>
  );
};

export default ReviewsStars;
