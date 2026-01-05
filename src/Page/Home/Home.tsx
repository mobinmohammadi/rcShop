import Header from "../../Components/Header/Header";
import ThebestOfMobile from "../../Components/Home/ThebestOfMobile/ThebestOfMobile";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import SliderHeader from "../../Components/HomeSlider/SliderHeader/SliderHeader";
import SliderContent from "../../../utils/Slider/Components/SliderContent";
import SmartFlagshipsSlider from "../../Components/SmartFlagships/SmartFlagshipsSlider";

export default function Home() {
  return (
    <div className="flex flex-col mb-20 gap-10">
      <Header />
      <SliderHeader />
      <HomeSlider />
      <SliderContent OfferTimes={false} title="تکنو تایم" link="#" svg="./Images/fair.webp" />
      <ThebestOfMobile />
      <SmartFlagshipsSlider/>
    </div>
  );
}
