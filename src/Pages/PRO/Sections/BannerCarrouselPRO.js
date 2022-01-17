import React from 'react'
import Baner from '../../../Images/bannerPro.jpg'
import styled from 'styled-components'
import ButtonPrimary from '../../../Components/ButtonPrimary'
import LogoBlue from '../../../Images/logoiconblue.svg'

export default function BannerCarrouselPRO() {
    return (
        <BanerCarrousel className="slider" src={Baner}>
            <div className='container-banner'>
                <div className="slider-container">
                    <h1>IMPULSA TU CLOSET CON</h1>
                    <img src={LogoBlue} alt='logo'/>
                    <br/>
                    <div className='btn-content'>
                        <ButtonPrimary text='Registrarse'/>
                    </div>
                </div>
            </div>
        </BanerCarrousel>
    )
}


const BanerCarrousel = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    background-image: url(${props => props.src});
    color: #000;
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
    
    .slider-container h1{
        font-weight: 500;
        font-size: 50px;
        margin: 0%;
    }

    .slider-container img{
        padding: 0%;
        padding: 1em 0em;
    }


    .btn-content{
        /* height: 40px; */
        display: flex;
        width: 160px;
    }
`