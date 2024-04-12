import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./MainSwiper.scss";
import MainSwiperButtons from "components/MainSwiper/MainSwiperButtons.tsx";
import { useMatchMedia } from "hooks/useMatchMedia.ts";
import { Autoplay } from "swiper/modules";

interface MainSwiperProps {
  images: string[];
}

const Mainswiper: FC<MainSwiperProps> = ({ images }) => {
  const [isMobile] = useMatchMedia(["(max-width: 992px)"]);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
    >
      {images.map((img: string, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          {
            <div className="main__img">
              <div className="wrapper">
                <img src={img} alt="" />
              </div>
            </div>
          }
        </SwiperSlide>
      ))}
      {!isMobile && <MainSwiperButtons />}
    </Swiper>
  );
};

export default Mainswiper;
