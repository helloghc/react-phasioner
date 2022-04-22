import React from 'react'
import BannerLogDesig from '../../Components/BannerLogDesig'
import BannerLogNormaly from '../../Components/BannerLogNormaly'
import BannerLogPRO from '../../Components/BannerLogPRO'
import DownloadBanner from '../../Components/DownloadBanner'
import useUser from '../../Hooks/useUser'
import BannerCarrousel from './Sections/BannerCarrousel'
import CategoryList from './Sections/CategoryList'
import DescriptionServices from './Sections/DescriptionServices'
import FashionWard from './Sections/FashionWard'
import InstagramGallery from './Sections/InstagramGallery'
import ProductsGreat from './Sections/ProductsGreat'


export const HomePage = () => {
    const { isLogged } = useUser();
    return (
        <div>
            <BannerCarrousel/>
            {
                !isLogged ? <DescriptionServices/> : <></>
            }
            
            <ProductsGreat/>
            {
                !isLogged ? <BannerLogPRO/> : <></>
            }
            
            <br/>
            <FashionWard/>
            <CategoryList/>
            {
                !isLogged ? <BannerLogDesig/> : <></>
            }
            
            <br/>
            <FashionWard/>
            <br/>
            {
                !isLogged ? <BannerLogNormaly/> : <></>
            }
            
            <InstagramGallery/>
            <DownloadBanner/>
        </div>
    )
}
