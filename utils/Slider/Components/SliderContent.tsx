import BoxItemOffer from "./BoxItemOffer"
import Slider from "./Slider/Slider"
import SliderOffer from "./Slider/Slider"


interface IOfferTimeProps {
  title: string
  svg: string
  link: string
  OfferTimes: boolean
}
function SliderContent({ title, svg, link, OfferTimes }: IOfferTimeProps) {
  return (
    <div className={``}>
      <div className=" pb-4 flex items-center text-md pr-5 pl-5 justify-between ">
        <div className="flex items-center mt-3 gap-1">
          {svg && (

            <img className="w-5 h-5" src={svg} alt="" />
          )}
          <span className="mt-1 ">{title}</span>
        </div>
        <div className="">
          <svg className="w-5 h-5 ">
            <use></use>
          </svg>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className={`mt-0.5 text-xxs ${!OfferTimes ? 'text-indigo-800' : 'text-white'} `}>نمایش همه</span>
            <svg className="w-5 h-5">
              <use xlinkHref="#chevron-left"></use>
            </svg>
          </div>
        </div>
      </div>
      <div className="">
      </div>
    </div>
  )
}

export default SliderContent