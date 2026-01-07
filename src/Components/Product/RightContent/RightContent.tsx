import { useParams } from "react-router"
import { useQueryProductId } from "../hook/useQueryProductId"
import type { IColorArr, IProductSlider, MainImageP } from "../../../global"
import { useEffect, useState } from "react"





function RightContent() {
    const { ProductID } = useParams()
    const { data } = useQueryProductId(ProductID || '1')
    const product: IProductSlider = data?.data


    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [selectedColor, setSelectedColor] = useState<IColorArr | null>(null)

    useEffect(() => {
        if (product && product.mainImage?.length) {
            setSelectedImage(product.mainImage[0]?.img)

        }
    }, [product])
    useEffect(() => {
        if (!selectedColor) return
        const contentImage = product?.mainImage.find((img: MainImageP) => (img.code == selectedColor.code))
        if (contentImage) setSelectedImage(contentImage?.img)
        console.log("sfhvb");

    }, [selectedColor, product])






    return (
        <div className='md:border-2 w-full  mmds:w-[70%]  flex   sm:p-6  rounded-md border-slate-200'>

            {product && (
                <>
                    <div className="flex flex-col-reverse sm:w-auto w-full md:flex-row items-center sm:items-start gap-7 sm:gap-2">

                        <div className="flex flex-col sm:w-auto w-full gap-3">
                            <span className='text-md max-w-120 line-clamp-2'>{product.name}
                            </span>
                            <span className='text-gray-600 text-xs'>{product.description}</span>
                            <div className="border-b-2 w-56 flex gap-2 text-xs border-b-slate-200 pb-6">
                                <span >نظرات کاربران</span>
                                <div className="flex *:text-sky-700 gap-1">
                                    <span>224</span>
                                    <span>نظر</span>
                                </div>
                            </div>
                            <div className="w-80 border-b-2 flex flex-col gap-3 pt-3 border-b-slate-200 pb-6">
                                <div className="flex gap-1 text-xs">
                                    <span>رنگ :</span>
                                    <span>{selectedColor ? selectedColor.name : product.colors[0].name}</span>
                                </div>
                                <div className="flex items-center gap-4 *:cursor-pointer">
                                    {product.colors.map((colors: any) => {

                                        const isActive = selectedColor?.code == colors.code

                                        return (

                                            <div onClick={() => setSelectedColor(colors)} className={`${isActive ? "border border-gray-700" : "border-slate-200"} border relative flex items-center pl-5 gap-2 rounded-lg p-1`}>
                                                <div style={{ backgroundColor: colors.code }} className="w-5 h-5 rounded-md"></div>
                                                <span className="text-xs">{colors.name}</span>
                                                {isActive && <span className="absolute  text-white text-xl">✓</span>}
                                            </div>
                                        )
                                    }
                                    )
                                    }
                                </div>
                            </div>
                            <span className='text-gray-900 text-xxs font-Dana-Bold pt-5'>ویژگی های اصلی </ span>
                            <div className="flex flex-col gap-5 text-xs *:last:border-0 *:flex *:gap-1  *:border-b-slate-300 *:border-b-2 *:pb-5 *:last:pb-0 *:border-dashed *:items-center border-2 border-slate-200 rounded-md p-5">
                                <div className="">
                                    <span className='text-slate-800'>سیستم عامل</span>
                                    <span className='text-gray-600'>{product.specs.processor}</span>
                                </div>
                                <div className="">
                                    <span className='text-slate-800'>حافظه داخلی :</span>
                                    <span className='text-gray-600'>{product.specs.memory}</span>
                                </div>
                                <div className="">
                                    <span className='text-slate-800'>دوربین ها :</span>
                                    <span className='text-gray-600'>{product.specs.camera}</span>
                                </div>
                                <div className="">
                                    <span className='text-slate-800'>سایز صفحه نمایش :</span>
                                    <span className='text-gray-600'>{product.specs.screen}</span>
                                </div>
                                <div className="">
                                    <span className='text-slate-800'>دوربین پشت :</span>
                                    <span className='text-gray-600'>سه گانه 50 مگاپیکسل + 12 مگاپیکسل + 5 مگاپیکسل</span>
                                </div>
                                <div className="">
                                    <span className='text-slate-800'>ظرفیت باتری :</span>
                                    <span className='text-gray-600'>{product.specs.battery}</span>
                                </div>
                            </div>
                            <div className="pt-5 flex flex-col gap-10  border-slate-200 border-2 rounded-md p-5">
                                <div className="flex gap-3 items-center">
                                    <img src="https://www.technolife.com/image/static_technopay_square.png" alt="" />
                                    <span className='text-xs text-gray-900 font-Dana-Bold'>این محصول را با تسهیلات تکنوپی بخرید!</span>
                                </div>
                                <div className="flex flex-col gap-3 pr-6 text-xs text-slate-600">
                                    <li>این کالا را اقساطی بخرید</li>
                                    <li>تا 150 میلیون تومان اعتبار با بازپرداخت 36 ماهه</li>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <img className='w-100 ' src={selectedImage ? selectedImage : ""} alt="" />
                            <div className="flex items-center justify-center gap-5">
                                {product.images.map(image => (
                                    <div className="w-15 border-slate-300 border rounded-md cursor-pointer overflow-hidden">

                                        <img className="" src={image} alt="" />
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>

                </>
            )}

        </div>
    )
}

export default RightContent