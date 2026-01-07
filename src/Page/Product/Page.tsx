import RightContent from '../../Components/Product/RightContent/RightContent'
import LeftContent from '../../Components/Product/LeftContent/LeftContent'
import Header from '../../Components/Header/Header'

export default function Page() {


    

    return (
        <div className=''>
            <Header />
            <div className="mt-5 px-5   gap-5 flex flex-col ">
                <RightContent/>
                <LeftContent />
            </div>
        </div>
    )
}
