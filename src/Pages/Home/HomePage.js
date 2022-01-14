import React from 'react'
import BannerLogDesig from '../../Components/BannerLogDesig'
import BannerLogNormaly from '../../Components/BannerLogNormaly'
import BannerLogPRO from '../../Components/BannerLogPRO'
import BannerCarrousel from './Sections/BannerCarrousel'
import CategoryList from './Sections/CategoryList'
import DescriptionServices from './Sections/DescriptionServices'
import FashionWard from './Sections/FashionWard'
import ProductsGreat from './Sections/ProductsGreat'


export default function HomePage() {

    return (
        <div>
            <BannerCarrousel/>
            <DescriptionServices/>
            <ProductsGreat/>
            <BannerLogPRO/>
            <br/>
            <FashionWard/>
            <CategoryList/>
            <BannerLogDesig/>
            <br/>
            <FashionWard/>
            <br/>
            <BannerLogNormaly/>
        </div>
    )
}
