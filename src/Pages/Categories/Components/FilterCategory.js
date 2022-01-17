import React from 'react'
import styled from 'styled-components'
import DropIcon from '../../../Images/dropicon.svg'

export default function FilterCategory() {
    return (
        <Fill>
            <div className='fill1'>
                <h1>FILTRAR POR: </h1>
                <p className='drop-item'>Tipo de prenda <img src={DropIcon} alt='drop-icon'/></p>
                <p className='drop-item'>Color <img src={DropIcon} alt='drop-icon'/></p>
                <p className='drop-item'>Talla <img src={DropIcon} alt='drop-icon'/></p>
                <p className='drop-item'>Precio <img src={DropIcon} alt='drop-icon'/></p>
            </div>
            <div className='fill1'>
                <h1>ORDENAR POR: </h1>
                <p className='drop-item'>Caracteristicas <img src={DropIcon} alt='drop-icon'/></p>
            </div>
            
        </Fill>
    )
}


const Fill = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    align-content: center;


    .fill1{
        display: flex;
    }


    .drop-item{
        padding: 0em 1em ;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        align-self: center;
        margin: 0%;
        cursor: pointer;
    }
`
