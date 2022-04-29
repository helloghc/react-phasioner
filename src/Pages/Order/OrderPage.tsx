import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import TitleCategory from '../Categories/Components/TitleCategory';
import DetailPay from './Sections/DetailPay';
import HistoryProduct from './Sections/HistoryProduct';
import ProductContext from '../../Contexts/products_context';
import { ProductModel } from '../../Models/product_model';
import useGetCards from '../../Hooks/Payments/use_get_cards';
import Radiobutton from './Components/radio_button';
import { PaymentCardModel } from '../../Models/payment_card_model';


export default function OrderPage() {
    const [isOpen] = useState(false);
    const { productBuy, cardPaymentSelect }:{ productBuy: ProductModel, cardPaymentSelect: PaymentCardModel} = useContext(ProductContext);
    const {myCards}: {myCards: PaymentCardModel[]} = useGetCards();

    return (
        <OrderCont isOpen={isOpen}>
                <div className='layout'>
                    <div className='rute-path'>
                            <h4>Inicio / {productBuy.category} / {productBuy.garment} / {productBuy.titleProduct}</h4>
                    </div>
                    <TitleCategory title={'Pedido'}/>
                    {
                        cardPaymentSelect ?
                            <div className='detail-order'>
                                <HistoryProduct />
                                <DetailPay />
                            </div> 
                            : 
                            <div>
                                <h1>Selecciona tu método de pago</h1>
                                {
                                    myCards?.map((e)=>{
                                    return <Radiobutton 
                                        key={e.id} 
                                        card={e}/>
                                     
                                    })
                                }  
                            </div>
                    }
                   
                </div> 
              
        </OrderCont>
    )
}

interface OrderProps {
    isOpen: boolean
}

const OrderCont = styled.section<OrderProps>`
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

const DropMethod = styled.div<OrderProps>`


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
