import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageViewer from './Sections/ImageViewer';
import Resume from './Sections/Resume';
import BannerLogPRO from '../../Components/BannerLogPRO'


// import ProductsList from '../Home/Components/ProductsList'
import ButtonPrimary from '../../Components/ButtonPrimary'

import TitleLine from '../../Components/TitleLine'
import useProduct from '../../Hooks/useProducts';
import { DetailsProductModel } from '../../Models/detail_prod_model';
import Loader from '../../Components/loader';




export default function DetailsPage({ prodID }: { prodID: string }) {

    const { detailprod, getDetailProduts, isLoadDetail }
    : {detailprod: DetailsProductModel, getDetailProduts: ({id}: {id:string}) => {}, isLoadDetail: boolean} = useProduct();

    useEffect(() => {
        console.log('looaded?');
        window.scrollTo(0, 0);
        getDetailProduts({ id: prodID });

    } , [getDetailProduts, prodID])

    return (
        <DetailCont>
            {
                !isLoadDetail  ?
                <div className='conteno'>
                <div className='rute-path'>
                    <h4>Inicio / {detailprod.productData?.category} / {detailprod.productData?.garment} / {detailprod.productData?.titleProduct}</h4>
                </div>

                <div className='detail-product'>
                    <ImageViewer prod={detailprod.productData!}/>
                    <Resume 
                        user={detailprod.userData!}
                        prod={detailprod.productData!}
                    />
                </div>

                <div className='more'>
                    <TitleLine text={'Mas de este Phasioner'}/>
                    {/* <ProductsList /> */}
                    <div className='view-more'>
                        <div className='line'></div>
                        <div className='btn-cont'>
                            <ButtonPrimary 
                                onclick={() => {}}
                                text='VER TODO'/>
                        </div>
                        <div className='line'></div>
                    </div>
                </div>
            </div> : <Loader/>
            }
            
            <BannerLogPRO />
        </DetailCont>
    )
}

const DetailCont = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-content: center;
    align-items: center;
    justify-content: center;

    .conteno{
        /* width: 100vw; */
        max-width: 80vw;
        display: flex;
        flex-direction: column;
    }
    .more{
        padding: 3em 0em;
    }


    .view-more{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .btn-cont{
        width: 10em;
    }

    .line{
        padding: 0;
        margin: 0;
        height: 2px;
        width: 30%;
        background: #000;
    }

   

    .detail-product{
        display: flex;
        width: 100%;
        /* flex-wrap: wrap; */
    }

    @media screen and (max-width: 768px) {
           .conteno{
               max-width: 90vw;
           }

              .detail-product{
                  display: block;
              }
           
    }
`;