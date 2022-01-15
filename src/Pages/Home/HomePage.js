import React from 'react'
import BannerLogDesig from '../../Components/BannerLogDesig'
import BannerLogNormaly from '../../Components/BannerLogNormaly'
import BannerLogPRO from '../../Components/BannerLogPRO'
import DownloadBanner from '../../Components/DownloadBanner'
import BannerCarrousel from './Sections/BannerCarrousel'
import CategoryList from './Sections/CategoryList'
import DescriptionServices from './Sections/DescriptionServices'
import FashionWard from './Sections/FashionWard'
import InstagramGallery from './Sections/InstagramGallery'
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
            <InstagramGallery/>
            <DownloadBanner/>
        </div>
    )
}
