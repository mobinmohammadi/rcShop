import BoxItemOffer from "./BoxItemOffer"
import SliderOffer from "./SliderOffer/SliderOffer"

function OfferTime() {
  return (
    <div className="container-custom rounded-md OfferTime pb-2 pr-2 pl-2 text-white ">
      <div className=" pb-4 flex items-center text-md justify-between ">
        <div className="flex items-center gap-1">
          <img className="w-5 h-5" src="./Images/fair.webp" alt="" />
          <span className="mt-1">تکنو تایم</span>
        </div>
        <div className="">
          <svg className="w-5 h-5 ">
            <use></use>
          </svg>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="mt-0.5">نمایش همه</span>
            <svg className="w-5 h-5">
              <use xlinkHref="#chevron-left"></use>
            </svg>
          </div>
        </div>
      </div>
        <div className="">
          <SliderOffer/>
        </div>
    </div>
  )
}

export default OfferTime