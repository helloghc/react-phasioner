import React, { useContext } from 'react'
// components
import ButtonPrimary from '../../../Components/ButtonPrimary'

// dependenci
import { Link } from 'wouter'
import styled from 'styled-components'
import { ProductModel } from '../../../Models/product_model';
import ProductContext from '../../../Contexts/products_context';
import useNewOrder from '../../../Hooks/Orders/use_neworder';


export default function DetailPay() {
    const {productBuy} : {productBuy: ProductModel} = useContext(ProductContext);
    
    const {newOrder} = useNewOrder();
    return (
        <DetailCont>
              <h1 className='produc-name'>{productBuy.titleProduct}</h1>
            <h2 className='price'>${productBuy.price}</h2>
            
            <div className='description'>
                <div className='item-description'>
                    <strong>Pedido: </strong>
                    <p> ${productBuy.price} MXN</p>
                </div>
                {/* <div className='item-description'>
                    <strong>Envio: </strong>
                    <p> $20 MXN</p>
                </div> */}
                <div className='item-description'>
                    <strong>Seguro: </strong>
                    <p> $20 MXN</p>
                </div>
                <div className='item-description'>
                    <strong className='price'>Total: </strong>
                    <p className='price'> ${productBuy.price! + 20} MXN</p>
                </div>
                <Link to={'/order'}>
                    <ButtonPrimary 
                        onclick={()=>{
                            newOrder({total: productBuy.price! + 20});
                        }}
                        text={'Pagar'}/>
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