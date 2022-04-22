import React from 'react'
import styled from 'styled-components'
import Googleplay from '../Images/gpdown.jpg'
import Appleplay from '../Images/appstore.jpg'

export default function DownloadBanner() {
    return (
        <DownloadBan>
            <h1>DESCARGA NUESTRA APP</h1>
            <div>
                <img src={Googleplay} alt='descarga la app por google play store'/>
                <img src={Appleplay} alt='descarga la app por la apple store'/>
            </div>
        </DownloadBan>
    )
}


const DownloadBan = styled.div`
    padding: 3em 0em;
    margin-top: 3em;
    width: 100%;
    height: 30vh;
    background: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-weight: 300;
    }
`;