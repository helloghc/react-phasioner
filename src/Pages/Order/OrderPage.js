import React, { useState } from 'react'
import styled from 'styled-components'
import TitleCategory from '../Categories/Components/TitleCategory';
import DetailPay from './Sections/DetailPay';
import HistoryProduct from './Sections/HistoryProduct';
import InputTextPrimary from '../../Components/InputTextPrimary';
import DropIcon from '../../Images/dropicon.svg'


export default function OrderPage() {
    const [isOpen, setIsOpen] = useState(false);

    onselect = () => {
            setIsOpen(!isOpen);
    }
    return (
        <OrderCont>
            <div className='layout'>
                <div className='rute-path'>
                        <h4>Inicio / Mujer / Vestidos / Vestido ZARA</h4>
                </div>
                <TitleCategory title={'Pedido'}/>
                <div className='detail-order'>
                    <HistoryProduct />
                    <DetailPay />
                </div>
                <div className='add-more-info'>
                <InputTextPrimary placeholder={'Añadir dirección'}/>
                <br/>
                <div className='payment-method' onClick={onselect}>
                    <h3>Selecciona un método de pago</h3>
                    
                    <img src={DropIcon} alt='drop'/>
                </div>
                    <DropMethod isOpen={isOpen}>
                        <p className='item-method'>Tarjeta de débito</p>
                        <p className='item-method'>Tarjeta de Crédito</p>
                        <p className='item-method'>Transferencia</p>
                        <p className='item-method'>Pago con bitcoin</p>
                    </DropMethod>
            </div>
            </div>
        </OrderCont>
    )
}


const OrderCont = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .layout{
        width: 100vw;
        max-width: 80vw;
        display: flex;
        flex-direction: column;
    }

    .detail-order{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }


    .payment-method{
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        padding: 1em 0em;

        &:hover{
            background-color: #F5F6F8;
        }
    }

    .payment-method img{
        width: 1.3em;
        ${(props) => {
        if (props.isOpen) {
            return `
            transform: rotate(180deg);
            flex-direction: column;
            `
        } else {
            return `
            display: flex;
            `
        }
    }}
    }
    .payment-method h3{
        margin: 0%;
    }


    @media screen and (max-width: 768px){
        .layout{
            max-width: 90vw;
        }
    }

`;

const DropMethod = styled.div`


${(props) => {
    if (props.isOpen) {
        return `
        display: flex;
        flex-direction: column;
        `
    } else {
        return `
        display: none;
        `
    }
}}
    /* display: none; */
    padding-top: 4px;
    position: relative;
    margin: 0%;
    padding: 0%;

    background-color: #fff;
    z-index: 9999;

    /* Size */
    height: 14em;

/* 
  &:hover {
    display: flex;
  } */

  .item-method{
    padding: 0.5em 0em;
    margin: 0;
  }

  .item-method:hover {
    background-color: #11D4E7;
    cursor: pointer;
    font-weight: bold;
   
  }


  .list-sub{
      padding: 0em 1em;
      display: flex;
      flex-wrap: wrap;
      height: 100%;
  }


  .item-sub{
      padding: 15px;
      margin: 0;
      cursor: pointer;
  }

  .item-sub:active {
      color: #11D4E7;
  }



`
