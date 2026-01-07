
export default function LeftContent() {
  return (
    <div className=" flex flex-col-reverse mmds:flex-col gap-5 text-gray-800 rounded-2xl mmds:p-5 shadow-xl mmds:w-[30%]">
      <div className=" h-25 shadow-xl pr-3 pl-3 rounded-sm flex flex-col justify-center gap-5">

        <div className="flex items-center justify-between  rounded-md">
          <div className="flex gap-2  items-center">
            <svg className="w-6 h-6">
              <use xlinkHref="#check-circle"></use>
            </svg>
            <span className="text-xs">بیمه به کالا اضافه شد</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-x cursor-pointer">نمایش جزییات</span>
            <svg className="w-3 h-3">
              <use href="#chevron-left"></use>
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center px-4">
          <div className="text-xs w-28 cursor-pointer border-red-500 border rounded-md text-red-700 flex px-3 py-2 gap-4 ">
            <span className="text-gray-900">حذف بیمه</span>
            <svg className="w-4 h-4 cursor-pointer">
              <use href="#trash"></use>
            </svg>
          </div>
          <div className="">
            <div className="flex gap-2 items-center">
              <span className="text-xs text-slate-400 line-through ">8,612,670</span>
              <div className="flex gap-0.5 items-center text-gray-950">
                <span className="text-xxs">5,454,691</span>
                <span className="text-x text-gray-800">تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F8FD] py-5 rounded-md  w-full px-4">
        <div className="flex *:flex *:gap-4  flex-col gap-5 *:last:border-0 pr-2 *:border-b *:border-white *:pb-4 ">

          <div className="flex justify-between items-center">

            <div className="flex gap-2 items-center">
              <svg className="w-6 h-6 bg-gray-800">
                <use xlinkHref=""></use>
              </svg>
              <span className="text-xs">تکنو لایف</span>
            </div>
            <div className="flex gap-1 items-center text-sky-800 font-bold">
              <span className="text-xs">همه فروشندگان (12) </span>
              <svg className="w-4 h-4 -rotate-90">
                <use xlinkHref="#chevron-left"></use>
              </svg>
            </div>
          </div>
          <div className="text-sky-900 font-bold">
            <svg className="w-4 h-4 bg-gray-900">
              <use xlinkHref="#"></use>
            </svg>
            <span className="text-xs">موجود در انبار تکنولایف ( ارسال فوری )</span>
          </div>
          <div className="text-sky-900 ">
            <svg className="w-4 h-4 bg-gray-900">
              <use xlinkHref="#"></use>
            </svg>
            <span className="text-xs text-gray-900">ارزیابی عملکرد :</span>
            <span className="font-bold text-xs">عالی</span>
          </div>
          <div className="text-sky-900 ">
            <svg className="w-4 h-4 bg-gray-900">
              <use xlinkHref="#"></use>
            </svg>
            <span className="text-xs text-gray-900">18 ماه گارانتی شرکتی</span>
          </div>
        </div>
      </div>

    </div>
  )
}
