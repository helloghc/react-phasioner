import React from 'react'
import Baner from '../../../Images/headerimg.jpg'
import styled from 'styled-components'
import ButtonPrimary from '../../../Components/ButtonPrimary'

export default function BannerCarrousel() {
    return (
        <BanerCarrousel className="slider" src={Baner}>
            <div className='container-banner'>
                <div className="slider-container">
                    <h2>Phasioner PRO</h2>
                    <h1>TU CLOSET, <br/>UN GRAN NEGOCIO</h1>
                    <div className='btn-content'>
                        <ButtonPrimary text='¡VENDER YA!'/>
                    </div>
                </div>
            </div>
        </BanerCarrousel>
    )
}

interface BannerProps {
    readonly src: string
}

const BanerCarrousel = styled.div<BannerProps>`
    width: 100%;
    height: calc(100vh - 100px);
    background-image: url(${props => props.src});
    color: #fff;
    background-size: cover;
    justify-content: center;
    align-content: center;
    display: flex;
    
    .container-banner{
        width: 100vw;
        max-width: 80vw;
        display: flex;
        justify-content: flex-start;
        align-self: center;
    }
    
    .slider-container h2{
        font-weight: 300;
    }
    .slider-container h1{
        font-weight: 500;
        font-size: 50px;
    }


    .btn-content{
        /* height: 40px; */
        display: flex;
        width: 160px;
    }
`