import { Link } from "react-router"
import type { IProductSlider } from "../../../src/global"

interface BoxItemOfferProps {
    product: IProductSlider
}



function BoxItemOffer({product} : BoxItemOfferProps) {
    return (
        <div className='bg-white flex flex-col gap-5 w-48 p-2 rounded-md text-gray-700'>
            <img className='w-full ' src='./Images/iphone.webp' alt="" />
            <Link to={`/product/${product.id}`} className=' text-xs leading-5 line-clamp-2'>{product.name}</Link>
            <div className="flex justify-between">
                <div className="bg-red-700 h-6 flex items-start  justify-center pt-1 pb-1 rounded-xs text-xxs text-white w-10">
                    <span className="">28%</span>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-1">
                        <span className="text-md">768,000</span>
                        <span className="text-xs">تومان</span>
                    </div>
                    <span className='text-slate-400 text-xs'>1200,000</span>
                </div>
            </div>
        </div>
    )
}

export default BoxItemOffer