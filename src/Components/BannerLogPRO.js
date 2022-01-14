import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import LogoPro from '../Images/logobanwhite.svg'
import BanPro from '../Images/proimg.jpg'
import styled from 'styled-components'

export default function BannerLogPRO() {
    return (
        <BanCntain>
            <div className='register-card'>
                <div className='con'>
                    <div className='btn-container'>
                    <img src={LogoPro}  alt='Logo'/>
                        <h3>VENDE YA</h3>
                        <ButtonPrimary text={'Registrarte'} />
                    </div>
                </div>
            </div>
            <div className='image-data'>
                <img src={BanPro}  alt='Logo'/>
            </div>
        </BanCntain>
    )
}


const BanCntain = styled.section`
    display: flex;
    height: 70vh;
    align-self: center;
    padding: 0;
    justify-content: center;

    .register-card {
        width:40%;
        height: 100%;
        display: flex;
        text-align: center;
        margin: 0 auto;
        background: #000;
        color: #fff;
    }
    
    .con{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        align-content: center;
    }

    .con img{
        width: 100%;
    }
    
    .btn-container{
        width: 20em;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-self: center;
        align-content: center;
   }
   .con h3{
        font-weight: 300;
   }
   .image-data{
         width:60%;
   }

   .image-data img{
         width: 100%;
         height: 100%;
         object-fit: cover;
   }
`;
