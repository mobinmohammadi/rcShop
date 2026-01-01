import BoxThebest from "./BoxThebest"
import { useQueryBestMobileCategury } from "./Hook/useQueryBestMobileCategury"

function ThebestOfMobile() {
    const data = useQueryBestMobileCategury()
    const bestCategodyMobile = data?.data
    console.log(bestCategodyMobile);



    return (
        <div className="container-custom pr-10 pl-10 mt-5    ">
            <div className="flex flex-col  gap-7">

                <span className="text-gray-800 font-bold text-center text-xl">برترین های موبایل</span>
                <div className="grid grid-cols-2 sm:grid-cols-5">
                    {bestCategodyMobile?.map((item: any) => (

                        <BoxThebest key={item.id} item={item} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ThebestOfMobile