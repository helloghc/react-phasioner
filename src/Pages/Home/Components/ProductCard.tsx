import React from 'react'
import styled from 'styled-components'
// import Pant from '../../../Images/pantalon.jpg'
import FavOn from '../../../Images/favoriteoff.svg'
import { Link } from 'wouter'
import { ProductModel } from '../../../Models/product_model'


export default function ProductCard({product}: {product: ProductModel}) {
    return (
        <Link href={`/${product.id}`}>      
            <CardContent>
                <img src={product.image?.at(0)} alt={product.titleProduct}/>
                <div className='title'>
                    <div className='line'></div>
                    <h4>{product.titleProduct.substring(0, 20)}</h4>
                    <div className='line'></div>
                </div>
                <div className='actions'>
                    <div></div>
                    <p>$ {product.price} MXN</p>
                    <img src={FavOn} alt='favorito'/>
                </div>
            </CardContent>
        </Link>
    )
}


const CardContent = styled.div`
    /* width: 15em; */
    cursor: pointer;
    margin-bottom: 2em;

    img{
        width: 100%;
        height: 10em;
        background-size: contain;
    }

    .title{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        
        h4{
            font-weight: 300;
        }
    }

    .line{
        padding: 0;
        margin: 0;
        height: 2px;
        width: 10%;
        background: #000;
    }
    
    .actions{
        display: flex;
        padding: 0;
        margin: 0;
        justify-content: space-between;
        align-items: center;
    }

    .actions img{
        width: 2em;
        height: 2em;
        background-size: cover;
    }

    @media screen and (max-width: 1000px){
        /* width: 9rem; */
    }
`;
