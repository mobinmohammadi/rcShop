import Header from "../../Components/Header/Header";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import SliderHeader from "../../Components/HomeSlider/SliderHeader/SliderHeader";
import OfferTime from "../../Components/OfferTime/Components/OfferTime";

export default function Home() {
  return (
    <div className="flex flex-col mb-20 gap-10">
      <Header />
      <SliderHeader />
      <HomeSlider />
      <OfferTime/>
    </div>
  );
}
