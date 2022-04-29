import React from 'react'
import styled from 'styled-components'
import useUser from '../Hooks/useUser';
import LeftNavitem from './left_navitem';
import ProdIcon from '../Images/PRODUCTOS.svg'
import ChatIcon from '../Images/chat.png'
import { useLocation } from 'wouter';

export default function LeftNavbar() {
    const { user, isLogged } = useUser();
    const [, navigate] = useLocation();

  return (
    <>
        {
            isLogged ?  <LeftNavbarLayout>
                    <LeftNavitem
                        image={user?.photoURL}
                        name={user?.name}
                        onAction={() => {
                            navigate(`/profile/${user?.id}`)
                        }}
                    />
            <LeftNavitem
                image={ProdIcon}
                name='Productos'
                onAction={() => {
                    navigate(`/`)
                }}
            />
            <LeftNavitem
                image={ChatIcon}
                name='Chat'
                onAction={() => {
                    navigate(`/`)
                }}
            />
            <LeftNavitem
                image={ChatIcon}
                name='Favoritos'
                onAction={() => {
                    navigate(`/`)
                }}
            />
            <LeftNavitem
                image={ChatIcon}
                name='Opiniones'
                onAction={() => {
                    navigate(`/`)
                }}
            />
            <LeftNavitem
                image={ChatIcon}
                name='Estadisticas'
                onAction={() => {
                    navigate(`/`)
                }}
            />
            <LeftNavitem
                image={ChatIcon}
                name='Billetera'
                onAction={() => {
                    navigate(`/`)
                }}
            />
            <LeftNavitem
                image={ChatIcon}
                name='Phasioner PRO'
                onAction={() => {
                    navigate(`/`)
                }}
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