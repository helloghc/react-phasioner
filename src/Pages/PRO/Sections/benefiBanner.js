import React from 'react'
import styled from 'styled-components'
import ButtonPrimary from '../../../Components/ButtonPrimary';
import Checkin from '../../../Images/circlecheck.svg'

export default function BenefiBanner() {
    return (
        <DownloadBani>
            <div className='container-benefits'>
                <div className='item-benefit'>
                    <p className='benefit-tile'>
                        <img src={Checkin} alt='icon' className='icon'/> 
                        Tus productos se verán más porque estarán en las primeras posiciones de búsqueda.
                    </p>
                </div>
                <div className='item-benefit'>
                    <p className='benefit-tile'>
                        <img src={Checkin} alt='icon' className='icon'/> 
                        Conseguiras mas ventas, favoritos y seguidores al tener mas alcance que otros usuarios.
                    </p>
                </div>
                <div className='item-benefit'>
                    <p className='benefit-tile'>
                        <img src={Checkin} alt='icon' className='icon'/> 
                        Tu perfil tendrá un diseño diferente y destacará.
                    </p>
                </div>
                <div className='item-benefit'>
                    <p className='benefit-tile'>
                        <img src={Checkin} alt='icon' className='icon'/> 
                        Estarás verificado dando más credibilidad a otros usuarios.
                    </p>
                </div>
            </div>
           
            <div className='btn-container'>
                <ButtonPrimary text={'Registrarme'}/>
            </div>

        </DownloadBani>
    )
}


const DownloadBani = styled.div`
    padding: 2em 0em;
    width: 100%;
    /* height: 30vh; */
    background: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .item-benefit{
        display: flex;
        justify-content: start;
        align-items: center;
        align-content: center;
    }

    .benefit-tile{
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        align-self: center;
        margin: 0%;
    }
    .icon{
        width: 2.3em;
        padding: 0.3em;
    }

    .btn-container{
        width: 20vw;
        margin-top: 3em;
    }

    h1{
        font-weight: 300;
    }
`;