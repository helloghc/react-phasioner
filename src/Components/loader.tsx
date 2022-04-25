import React from 'react'
import styled from 'styled-components'
import LogoGif from '../Images/logo.gif'

export default function Loader() {
  return (
    <LoaderStyle>
        <img src={LogoGif} alt='Loading'/>
    </LoaderStyle>
  )
}

const LoaderStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    width: 100vw;
    background: #fff;

`;
