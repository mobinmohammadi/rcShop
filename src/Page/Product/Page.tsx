import React from 'react'
import RightContent from '../../Components/Product/RightContent/RightContent'
import LeftContent from '../../Components/Product/LeftContent/LeftContent'
import Header from '../../Components/Header/Header'

export default function Page() {
    return (
        <div className='container-custom'>
            <Header />
            <div className="mt-5  flex  ">
                <RightContent />
                <LeftContent />
            </div>
        </div>
    )
}
