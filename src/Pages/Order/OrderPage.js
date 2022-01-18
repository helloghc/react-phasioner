import React from 'react'
import styled from 'styled-components'
import TitleCategory from '../Categories/Components/TitleCategory';
import DetailPay from './Sections/DetailPay';
import HistoryProduct from './Sections/HistoryProduct';

export default function OrderPage() {
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
    }

`;
