import React from 'react'
import styled from 'styled-components'
import ButtonPrimary from '../../../Components/ButtonPrimary';
import InstaIcon from '../../../Images/instablack.svg'
import InstaImg from '../../../Images/img1.jpg'
import InstaImg1 from '../../../Images/img2.jpg'

export default function InstagramGallery() {
    return (
        <GaleryContainer>
            <div className='content'>
                <div className='head'>
                    <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><img src={InstaIcon} alt='whatsapp icon' /></a>
                    <h1># SOYPHASIONER</h1>
                    <div className='btn-cont'>
                        <ButtonPrimary text={'Seguir'}/>
                    </div>
                </div>
                <div className='gallery'>
                    <img src={InstaImg} alt='imgen de la galeria de instagram' />
                    <img src={InstaImg1} alt='imgen de la galeria de instagram' />
                    <img src={InstaImg1} alt='imgen de la galeria de instagram' />
                </div>
            </div>
        </GaleryContainer>
    )
}


const GaleryContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;

    .content{
        width: 100vw;
        max-width: 80vw;
    }

    .head{
        display: flex;
        justify-content: space-between;
        align-self: center;
        align-items: center;
        padding: 3em 0em;
    }
    
    .head h1{
        font-weight: 300;
    }
    .btn-cont{
        width: 5em;
    }


    .gallery{
        display: flex;
        justify-content: space-between;
    }

    .gallery img{
        width: 18rem;
        height: 18rem;
    }

    @media screen and (max-width: 1000px) {
        .gallery img{
            width: 12em;
            height: 12em;
        }

        .gallery{
            flex-wrap: wrap;
        }
    }
  
`;