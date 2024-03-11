import PrimarySection from "components/Sections/PrimarySection/PrimarySection";
import sectionData from "components/Sections/PrimarySection/data/sectionData";
import PromoSection from "components/Sections/PromoSection/PromoSection";
import { FC } from "react";

const MainPage: FC = () => {
  return (
    <>
      <PromoSection />
      <PrimarySection {...sectionData[0]}></PrimarySection>
      <PrimarySection {...sectionData[1]}></PrimarySection>
      <PrimarySection {...sectionData[2]}></PrimarySection>
    </>
  );
};

export default MainPage;
