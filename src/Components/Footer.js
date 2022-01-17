import React from 'react'
import styled from 'styled-components'
import ImagePort from '../Images/footerport.jpg'
import LogoPh from '../Images/iconfooter.svg'
import Logowpp from '../Images/wppblack.svg'
import LogoFb from '../Images/fbblack.svg'
import LogoYT from '../Images/ytblack.svg'
import LogoIG from '../Images/instablack.svg'
import ButtonPrimary from './ButtonPrimary'

import IconLocation from '../Images/location.svg'
import IconPhone from '../Images/phonofooter.svg'
import IconEmail from '../Images/emailblack.svg'
import InputTextPrimary from './InputTextPrimary'


export default function Footer() {
    return (
        <ContainFooter>
            <div className='port'>
                <img src={ImagePort}  alt='Protada del footer'/>
            </div>
            <div className='info'>
                <div className='only-social'>
                    <img src={LogoPh} alt='facebook' className='logoph'/>
                    <br/>
                    <div className='social-icons'>
                        <img src={Logowpp} alt=''/>
                        <img src={LogoFb} alt=''/>
                        <img src={LogoYT} alt=''/>
                        <img src={LogoIG} alt=''/>
                    </div>
                    <br/>
                    <ButtonPrimary text={'CHAT EN LINEA'}/>
                </div>
                <div className='info-contact'>

                    <div className='items-icons'>
                        <img src={IconPhone} alt=''/>
                        <img src={IconEmail} alt=''/>
                        <img src={IconLocation} alt=''/>
                    </div>
                    <div className='items-texts'>
                        <h3>Contacto</h3>
                        <p>+8322 3212 12</p>
                        <p>user@phasioner.com</p>
                        <p>Mexico</p>
                    </div>

                </div>
                <div className='menu'>
                    <h3>MENÜ</h3>
                    <p>Inicio</p>
                    <p>Mujer</p>
                    <p>Hombre</p>
                    <p>Niños</p>
                    <p>Destacados</p>
                    <p>Nosotros</p>
                    <p>Contacto</p>
                </div>

                <div className='new-seller'>
                    <h3>NEWSLETTER<br/>PHASIONER</h3>
                    <br/>
                    <InputTextPrimary placeholder={'Tu email'}/>
                    <br/>
                    <ButtonPrimary text={'SUSCRIBIRSE'}/>
                </div>
            </div>
        </ContainFooter>
    )
}


const ContainFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .port{
        width: 100%;
        height: 60vh;
    }

    .port img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .info{
        width: 100vw;
        max-width: 80vw;
        padding: 2em 0em;
        display: flex;
        justify-content: space-between;
    }

    .only-social{
        width: 12vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .social-icons{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }



    .info-contact{
        display: flex;
        justify-content: end;
    }



    .items-icons{
        display: flex;
        flex-direction: column;
        padding-top: 3.3em;
    }
    
    .items-icons img{
        
        padding: 0.4em 1em;
        width: 1.3em;
        flex-direction: column;
        justify-content: space-between;
    }
`;