declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';

// Product review by user
export interface UserReview {
    id: number | string;
    username: string;
    rating: number; // 1 تا 5
    comment: string;
    date: string; // ISO string
}

// Product specifications
export interface ProductSpecs {
    processor: string;
    screen: string;
    memory: string;
    battery: string;
    camera: string;
    [key: string]: string; // برای مشخصات اضافه
}

// Main product interface

interface MainImageP {
    code: string,
    img: string

}

interface IColorArr {
    code: string
    name: string
}
export interface IProductSlider {
    id: string;
    name: string;
    description: string;
    mainImage: MainImageP[]; // تصویر اصلی
    images: string[];
    colors: IColorArr[];
    rating: number;
    specs: ProductSpecs;
    user_reviews: UserReview[];
}
