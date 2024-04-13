import PrimarySection from "components/Sections/PrimarySection/PrimarySection";
import sectionData from "components/Sections/PrimarySection/data/sectionData";
import PromoSection from "components/Sections/PromoSection/PromoSection";
import { FC } from "react";
import Mainswiper from "components/MainSwiper/Mainswiper.tsx";
import swiper11 from "/main-page-img/swiper1-1.png";
import swiper12 from "/main-page-img/swiper1-2.jpg";
import swiper13 from "/main-page-img/swiper1-3.jpg";
import swiper21 from "/main-page-img/swiper2-1.jpg";
import swiper22 from "/main-page-img/swiper2-2.jpg";
import swiper31 from "/main-page-img/swiper3-1.jpg";
import swiper32 from "/main-page-img/swiper3-2.jpg";
import swiper33 from "/main-page-img/swiper3-3.jpg";

const MainPage: FC = () => {
  return (
    <>
      <PromoSection />
      <PrimarySection {...sectionData[0]}>
        <Mainswiper images={[swiper11, swiper12, swiper13]} />
      </PrimarySection>
      <PrimarySection {...sectionData[1]}>
        <Mainswiper images={[swiper21, swiper22]} />
      </PrimarySection>
      <PrimarySection {...sectionData[2]}>
        <Mainswiper images={[swiper32, swiper31, swiper33]} />
      </PrimarySection>
    </>
  );
};

export default MainPage;
