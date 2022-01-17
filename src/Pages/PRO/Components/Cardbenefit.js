import React from 'react'
import TitleImage from '../../../Images/logonly.svg'
import Checkin from '../../../Images/check.svg'
import CheckOut from '../../../Images/x.svg'
import styled from 'styled-components'

export default function Cardbenefit() {
    return (
        <CardBene>
            <img src={TitleImage} alt='Title' className='title'/>
            <div className='conteiner-benefits'>
                <div className='item-benefit'>
                    <p className='benefit-tile'><img src={Checkin} alt='icon' className='icon'/> Envios</p>
                </div>
                <div className='item-benefit'>
                    <p className='benefit-tile'><img src={CheckOut} alt='icon' className='icon'/> Suscripciones</p>
                </div>
                <div className='item-benefit'>
                    <p className='benefit-tile'><img src={CheckOut} alt='icon' className='icon'/> Sin limites de publicación</p>
                </div>
                <div className='item-benefit'>
                    <p className='benefit-tile'><img src={CheckOut} alt='icon' className='icon'/> Visibilidad en búsquedas</p>
                </div>
                <div className='item-benefit'>
                    <p className='benefit-tile'><img src={CheckOut} alt='icon' className='icon'/> Perfil personalizado</p>
                </div>
                <div className='item-benefit'>
                    <p className='benefit-tile'><img src={CheckOut} alt='icon' className='icon'/> Sin limite de tiempo</p>
                </div>
                <div className='item-benefit'>
                    <p className='benefit-tile'><img src={CheckOut} alt='icon' className='icon'/> Compartir web y teléfono</p>
                </div>
            </div>
        </CardBene>
    )
}


const CardBene = styled.div`
    width: 23vw;
    background: #F5F6F8;
    padding: 30px;

    .title{
       height: 2.5em;
    }

    .conteiner-benefits{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

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
        width: 1.3em;
        padding: 0.8em;
    }
`;