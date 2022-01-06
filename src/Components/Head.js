import React from 'react'
import styled from 'styled-components'


// Components
import ButtonIcon from './ButtonIcon'

// ICONS
import WppIcon from '../Images/whatsapp.svg'
import FbIcon from '../Images/facebook.svg'
import InstaIcon from '../Images/instagram.svg'
import Youtube from '../Images/youtube.svg'
import UserIcon from '../Images/login.svg'
import SearchIcon from '../Images/buscar.svg'


export default function Head() {
    return <Headin>
        <div className='content-head'>
            <div className='icons-social'>
                <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><img src={WppIcon} alt='whatsapp icon' /></a>
                <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><img src={FbIcon} alt='whatsapp icon' /></a>
                <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><img src={InstaIcon} alt='whatsapp icon' /></a>
                <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><img src={Youtube} alt='whatsapp icon' /></a>
            </div>
            <div className='info'>
                <h5>Envio GRATIS en compras mayores a $500MXN</h5>
            </div>
            <div className='btns-actions'>
                <ButtonIcon
                    text='Buscar'
                    icon={SearchIcon}
                />
                <ButtonIcon 
                    text='Login' 
                    icon={UserIcon}    
                />
            </div>
        </div>
    </Headin>
}


var Headin = styled.div`
    background-color: #000000;
    justify-content: center;
    display: flex;


    .content-head{
        max-width: 80vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
    }

    .icons-social img{
        padding: 0px 10px;
        margin-right: 6px;
    }

    .info{
        display: flex;
        height: 5px;
    }

    .info h5{
        color: #ffffff;
        font-weight: 400;
        align-items: center;
        justify-content: center;
        align-self: center;        
    }

    .btns-actions{
        display: flex;
    }

`