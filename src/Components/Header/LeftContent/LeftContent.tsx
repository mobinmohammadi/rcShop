
function LeftContent() {
    return (
        <div>
            <div className="flex items-center gap-7">

                <div className="border flex items-center gap-5 cursor-pointer border-gray-900 rounded-md pt-2 pb-2 pr-4 pl-4">
                    <span>
                        ورود
                    </span>
                    <span>|</span>
                    <span>
                        ثبت نام

                    </span>
                </div>
                <div className="border border-gray-600 rounded-md">
                    <svg className="w-10 h-10 text-black">
                        <use xlinkHref="#shopping-basket"></use>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default LeftContent