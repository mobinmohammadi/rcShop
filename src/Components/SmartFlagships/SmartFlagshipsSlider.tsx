import React from 'react'
import SliderContent from '../../../utils/Slider/Components/SliderContent'
import Slider from '../../../utils/Slider/Components/Slider/Slider'
import { useQueryProduct } from './hook/useQueryProduct'

function SmartFlagshipsSlider() {

    const {data} = useQueryProduct()

    console.log('data' , data?.data);
    

    return (
        <div className='container-custom'><SliderContent title='پرچمداران هوشمند' />
            <Slider data={data?.data} />
        </div>
    )
}

export default SmartFlagshipsSlider