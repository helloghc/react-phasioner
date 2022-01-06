import React from 'react'
import styled from 'styled-components'
import Head from './Head';


// icons
import Logo from '../Images/logonav.svg'
import LogoPro from '../Images/logopro.svg'
import ButtonPrimary from './ButtonPrimary';



export default function NavBar() {
    return (
        <Navbar>
            <Head/>
            <div className='conteiner-nav'>
                <nav>
                    <div className='logo-content'>
                        <img src={Logo} alt='logo'/>
                    </div>
                    <div className='nav-content'>
                        <ul className='nav-list'>
                            <li>MUJER</li>
                            <li>HOMBRE</li>
                            <li>NIÑOS</li>
                            <li>DISEÑADORES</li>
                        </ul>
                        <img src={LogoPro} alt='logo'/>
                        <div className='btn-content'>

                        <ButtonPrimary
                            text='¡Vender Ya!'
                        />
                        </div>
                    </div>
                </nav>
            </div>
        </Navbar>
    )
}

const Navbar = styled.nav`
    
    .conteiner-nav{
        width: 100%;
        display: flex;
        justify-content: center;
        align-self: center;
        align-content: center;
    }
    
    nav{
        width: 100vw;
        max-width: 80vw;
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        border-bottom: 1px solid #000;
        padding: 20px 0px;
    }

    .nav-content{
        height: 50px;
        display: flex;
    }
    .nav-content img{
        height: 30px;
        display: flex;
        padding: 10px 0px;
    }

    .nav-content ul {
        display: flex;
    }

    .nav-content li{
        height: 100%;
        display: flex;  
        align-items: center;
        justify-content: center;
        padding-bottom: 30px;
        margin: 0px 10px;
        cursor: pointer;
    }
    .nav-content li:hover{
        border-bottom: 2px solid #000;
    }



    .btn-content{
        height: 50px;
        display: flex;
        width: 160px;
    }


    
`;


