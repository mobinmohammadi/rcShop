import React from 'react'

function BoxItemOffer() {
    return (
        <div className='bg-white flex flex-col gap-5 w-48 p-2 rounded-md text-gray-700'>
            <img className='w-full ' src="https://www.technolife.com/image/small_product-TLP-62730_af9690e4-f67d-40cc-9ffb-2c2ffc12240c.png" alt="" />
            <span className=' text-xs'>هندزفری بلوتوثی تی سی اچ مدل D6 Sound Hunt</span>
            <div className="flex items-center justify-between">
                <div className="bg-red-700 flex items-center justify-center pt-1 pb-1 rounded-xs text-xxs text-white w-10">
                    <span>28%</span>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <span>768,000</span>
                        <span>تومان</span>
                    </div>
                    <span className='text-slate-400 text-xs'>1200,000</span>
                </div>
            </div>
        </div>
    )
}

export default BoxItemOffer