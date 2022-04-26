import React from 'react'
import styled from 'styled-components'
import useUser from '../Hooks/useUser';
import LeftNavitem from './left_navitem';
import ProdIcon from '../Images/PRODUCTOS.svg'
import ChatIcon from '../Images/chat.png'

export default function LeftNavbar() {
    const { user, isLogged } = useUser();
  return (
    <>
        {
            isLogged ?  <LeftNavbarLayout>
            <LeftNavitem
                image={user?.photoURL}
                name={user?.name}
            />
            <LeftNavitem
                image={ProdIcon}
                name='Productos'
            />
            <LeftNavitem
                image={ChatIcon}
                name='Chat'
            />
            <LeftNavitem
                image={ChatIcon}
                name='Favoritos'
            />
            <LeftNavitem
                image={ChatIcon}
                name='Opiniones'
            />
            <LeftNavitem
                image={ChatIcon}
                name='Estadisticas'
            />
            <LeftNavitem
                image={ChatIcon}
                name='Billetera'
            />
            <LeftNavitem
                image={ChatIcon}
                name='Phasioner PRO'
            />
            
        </LeftNavbarLayout>
        : null
        }
    </>
   
  )
}

const LeftNavbarLayout = styled.div`
    height: 100vh;
    z-index: 10000;
    position: fixed;
    flex: 1;
    top: 0px;
    background: #000000;
    overflow-y: scroll;

    h1{
        color: #ffffff;
    }

    @media screen and (max-width: 1000px) {
        width: 100vw;
        height: 10vh;
        top: calc(100vh - 10%);
        display: flex;
        overflow-y: none;
        justify-content: center;
        align-items: center;
    }
`;