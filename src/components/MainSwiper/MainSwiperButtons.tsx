import { arrowSvg } from "components/MainSwiper/svg/svg.tsx";
import { useSwiper } from "swiper/react";

const MainSwiperButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <button
        className="main__swiper-btn main__swiper-btn-prev"
        type="button"
        onClick={() => swiper.slidePrev()}
      >
        {arrowSvg}
      </button>
      <button
        className="main__swiper-btn main__swiper-btn-next"
        type="button"
        onClick={() => swiper.slideNext()}
      >
        {arrowSvg}
      </button>
    </>
  );
};

export default MainSwiperButtons;
