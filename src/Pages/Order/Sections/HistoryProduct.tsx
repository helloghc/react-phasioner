import React, { useContext } from 'react'
import styled from 'styled-components'
import ProductContext from '../../../Contexts/products_context';


import { ProductModel } from '../../../Models/product_model'

export default function HistoryProduct() {

    const {productBuy} : {productBuy: ProductModel} = useContext(ProductContext);


    return (
        <FirstLay>
            <CardHistory>
                <img src={productBuy.image?.at(0)} alt='Vestido' className='image-card'/>
                <div className='info-card'>
                    <h3>{productBuy.titleProduct}</h3>
                    <p>
                       {productBuy.description}
                    </p>
                    <h1>${productBuy.price} MXN</h1>
                </div>
            </CardHistory>
            

        </FirstLay>
    )
}



const FirstLay = styled.div`
    margin-right: 2em;
`;


const CardHistory = styled.div`
    display: flex;
    padding: 2em 0em;


    .image-card{
        width: 10em;
        height: 10em;
    }

    .info-card{
        padding: 0em 0em 0em 2em;
    }

    .info-card h3{
        padding: 0em;
        margin: 0em;
    }

    @media screen and (max-width: 790px){
        justify-content: space-between;
        .image-card{
            width: 6em;
            height: 6em;
        }
        .info-card p{
            display: none;
        }
    }
`;