import { FC, useMemo } from "react";
import { getCountArray } from "utils/getCountArray";
import { starSvg, unActiveStarSvg } from "./svg/svg";

interface ReviewsStarsProps {
  evaluation: number[];
}

const ReviewsStars: FC<ReviewsStarsProps> = ({ evaluation }) => {
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
        <span key={item}>{unActiveStarSvg}</span>
      ))}
      ({evaluation.length})
    </div>
  );
};

export default ReviewsStars;
