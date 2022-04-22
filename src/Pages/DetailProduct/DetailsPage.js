import React from 'react'
import styled from 'styled-components'
import ImageViewer from './Sections/ImageViewer';
import Resume from './Sections/Resume';
import BannerLogPRO from '../../Components/BannerLogPRO'


import ProductsList from '../Home/Components/ProductsList'
import ButtonPrimary from '../../Components/ButtonPrimary'

import TitleLine from '../../Components/TitleLine'



export default function DetailsPage() {
    return (
        <DetailCont>
            <div className='conteno'>
                <div className='rute-path'>
                    <h4>Inicio / Mujer / Vestidos / Vestido ZARA</h4>
                </div>

                <div className='detail-product'>
                    <ImageViewer />
                    <Resume />
                </div>

                <div className='more'>
                <TitleLine text={'Mas de este Phasioner'}/>
                <ProductsList />
                <div className='view-more'>
                    <div className='line'></div>
                    <div className='btn-cont'>
                        <ButtonPrimary text='VER TODO'/>
                    </div>
                    <div className='line'></div>
                </div>
            </div>
            </div>
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