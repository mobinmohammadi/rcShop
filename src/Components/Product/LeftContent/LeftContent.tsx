
export default function LeftContent() {
  return (
    <div className=" text-gray-800 rounded-2xl p-5 shadow-xl w-[30%]">
      <div className=" h-25 shadow-xl pr-3 pl-3 flex flex-col justify-center gap-5">

        <div className="flex items-center justify-between  rounded-md">
          <div className="flex gap-2  items-center">
            <svg className="w-6 h-6">
              <use xlinkHref="#check-circle"></use>
            </svg>
            <span className="text-xs">بیمه به کالا اضافه شد</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs cursor-pointer">نمایش جزییات</span>
            <svg className="w-3 h-3">
              <use href="#chevron-left"></use>
            </svg>
          </div>
        </div>
        <div className="">
          <div className="text-xs w-28 cursor-pointer border-red-500 border rounded-md text-red-700 flex p-2 gap-4 ">
            <span>حذف بیمه</span>
            <svg className="w-4 h-4 cursor-pointer">
              <use href="#trash"></use>
            </svg>
          </div>
        </div>
      </div>

    </div>
  )
}
