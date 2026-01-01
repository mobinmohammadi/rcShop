import React from 'react'

function RightContent() {
    return (
        <div className='border-2 w-[70%] flex  p-6  rounded-md border-slate-200'>

            <div className="flex flex-col  gap-3">
                <span className='text-md max-w-120 line-clamp-2'>گوشی موبايل سامسونگ Galaxy A56 5G ظرفیت 256 گیگابایت رم 8 گیگابایت - ویتنام
                </span>
                <span className='text-gray-600 text-xs'>Samsung Galaxy A56 5G 256/8GB - Vietnam</span>
                <div className="border-b-2 w-56 flex gap-2 text-xs border-b-slate-200 pb-6">
                    <span >نظرات کاربران</span>
                    <div className="flex *:text-sky-700 gap-1">
                        <span>224</span>
                        <span>نظر</span>
                    </div>
                </div>
                <div className="w-80 border-b-2 pt-3 border-b-slate-200 pb-6">
                    <div className="flex gap-1 text-xs">
                        <span>رنگ :</span>
                        <span>مشکی</span>
                    </div>
                </div>
                <span className='text-gray-900 text-xxs font-Dana-Bold pt-5'>ویژگی های اصلی </ span>
                <div className="flex flex-col gap-5 text-xs *:last:border-0 *:flex *:gap-1  *:border-b-slate-300 *:border-b-2 *:pb-5 *:last:pb-0 *:border-dashed *:items-center border-2 border-slate-200 rounded-md p-5">
                    <div className="">
                        <span className='text-slate-800'>نوع پردازنده - CPU :</span>
                        <span className='text-gray-600'>Exynos 1580 (4 نانومتر)</span>
                    </div>
                    <div className="">
                        <span className='text-slate-800'>حافظه داخلی :</span>
                        <span className='text-gray-600'>256 گیگابایت</span>
                    </div>
                    <div className="">
                        <span className='text-slate-800'>حافظه RAM :</span>
                        <span className='text-gray-600'>8 گیگابایت</span>
                    </div>
                    <div className="">
                        <span className='text-slate-800'>سایز صفحه نمایش :</span>
                        <span className='text-gray-600'>6.7 اینچ</span>
                    </div>
                    <div className="">
                        <span className='text-slate-800'>دوربین پشت :</span>
                        <span className='text-gray-600'>سه گانه 50 مگاپیکسل + 12 مگاپیکسل + 5 مگاپیکسل</span>
                    </div>
                     <div className="">
                        <span className='text-slate-800'>ظرفیت باتری :</span>
                        <span className='text-gray-600'>5000 میلی آمپر ساعت</span>
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
                <img className='w-100 ' src="./Images/01.webp" alt="" />
            </div>
        </div>
    )
}

export default RightContent