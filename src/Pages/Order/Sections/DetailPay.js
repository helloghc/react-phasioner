import React from 'react'
// components
import ButtonPrimary from '../../../Components/ButtonPrimary'

// dependenci
import { Link } from 'wouter'
import styled from 'styled-components'


export default function DetailPay() {
    return (
        <DetailCont>
              <h1 className='produc-name'>Vestido ZARA</h1>
            <h2 className='price'>$300</h2>
            
            <div className='description'>
                <div className='item-description'>
                    <strong>Pedido: </strong>
                    <p> $200 MXN</p>
                </div>
                <div className='item-description'>
                    <strong>Envio: </strong>
                    <p> $20 MXN</p>
                </div>
                <div className='item-description'>
                    <strong>Seguro: </strong>
                    <p> $20 MXN</p>
                </div>
                <div className='item-description'>
                    <strong className='price'>Total: </strong>
                    <p className='price'> $240 MXN</p>
                </div>
                <Link to={'/order'}>
                    <ButtonPrimary text={'Pagar'}/>
                </Link>
            </div>
        </DetailCont>
    )
}

const DetailCont = styled.section`
    width: 40em;
    padding: 2em 0em;


    .price{
        font-size: 1.4em;
        font-weight: bold;
    }

    .produc-name{
        font-size: 3em;
        margin: 0;
    }

    .description{
        padding: 1em 0em;
    }


    .item-description{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`