import BannerSection from "./BannerSection";
import Category from "./CategorySection";
import FeatureSection from "./FeatureSection";
import { CarSection } from "./CarSection";
import Testiminorial from "./TestiminorialSection";
import BestPricing from "./BestPricing";
import BlogSection from "./BlogSection";
import Faq from "./FaqSection";
import AllCarCategory from "./allCarCategory";
import FactNumberSection from "./FactNumberSection";
import PopularSection from "./PopularSection";

const Main = () => {
 

  return (
    <div >
      <BannerSection />
      <CarSection />
      <Category />
      <FeatureSection />

      <FactNumberSection />
      <PopularSection />
      <Testiminorial />
      <BestPricing />
      <BlogSection />
      <Faq />
      <AllCarCategory />

      
    </div>
  );
};

export default Main;
