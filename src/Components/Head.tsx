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
import { useLocation } from 'wouter'
import useUser from '../Hooks/useUser'
import { UserModel } from '../Models/user_models'


export default function Head() {
    const { isLogged, user }: {isLogged: boolean, user: UserModel} = useUser();
    const [, setLocation ] = useLocation();
 
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
                    action={() => {}}
                />

              {!isLogged ?  
                    <ButtonIcon 
                        text='Login'
                        icon={UserIcon}
                        action={() => {
                            setLocation('/login')
                        }}
                    />
                 : 
                    <img 
                        src={user?.photoURL} 
                        alt='user' 
                        className='avatar-head' 
                        onClick={() => {
                            setLocation(`/profile/${user.id}`)
                        }}
                    />
                }
            </div>
        </div>
    </Headin>
}


var Headin = styled.div`
    background-color: #000000;
    justify-content: center;
    display: flex;
    z-index: 9999;


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
        font-family: 'avenir-book';    
    }

    .btns-actions{
        display: flex;
    }

    .avatar-head {
        border-radius: 100%;
        width: 2em;
        height: 2em;
        padding: 0.5em;
    }

    @media screen and (max-width: 808px) {
        .info{
            display: none;
        }

        .icons-social img{
            height: 1em;
            padding: 0px 3px;
        }

        .content-head{
            max-width: 90vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100vw;
        }
    }
`