import React from 'react'
import styled from 'styled-components'
import ImageViewer from './Sections/ImageViewer';
import Resume from './Sections/Resume';
import BannerLogPRO from '../../Components/BannerLogPRO'


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

   

    .detail-product{
        display: flex;
    }
`;