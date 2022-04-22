import React from 'react'
import styled from 'styled-components'
import ButtonPrimary from './ButtonPrimary';
import BanPro from '../Images/wantsph.jpg'

export default function BannerLogNormaly() {
    return (
        <BanNormaly>
        <div className='register-card'>
            <div className='con'>
                <div className='btn-container'>
                {/* <img src={LogoPro}  alt='Logo'/> */}
                    <h3>QUIERO SER PHASIONER</h3>
                    <ButtonPrimary text={'Registrarte'} />
                </div>
            </div>
        </div>
        <div className='image-data'>
            <img src={BanPro}  alt='Logo'/>
        </div>
    </BanNormaly>
    )
}

const BanNormaly = styled.div`
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
        align-items: center;
        align-content: center;
    }

    .con img{
        width: 4em;
    }
    
    .btn-container{
        width: 20em;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-self: center;
        align-content: center;
   }
   .con h2 {
        font-weight: 300;
   }
   .con h3 {
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

   @media screen and (max-width: 1000px){
       .register-card{
           width: 90%;
       }
        .btn-container{
            width: 15rem;
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-self: center;
            align-content: center;
        }

        .image-data{
            width: 10%;
        }
   }
`;