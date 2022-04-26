import React from 'react'
import styled from 'styled-components'
import moment from 'moment';
import ButtonPrimary from '../../../Components/ButtonPrimary';

// import Vestido from '../../../Images/vestido.jpg'
import { ProductModel } from '../../../Models/product_model';



export default function ClotesProduct({ product }: { product: ProductModel }) {
  return ( 
    <ClotesProductLayout key={product.id}>
        <div className='details'>
            <div className='details-img'>
                <div className='checks'>
                    <input type="radio" value="Male" name="gender" />
                    <p className='spacerw5'></p>
                </div>
                <img src={product.image?.at(0)} alt='Vestido'/>
                <p className='spacerw5'></p>
                <div className='detail-info'>
                    <h3>{product.titleProduct} Talle: {product.wails}</h3>
                    <h2>${product.price}</h2>
                </div>
            </div>
                <div className='detail-date'>
                    <p>Publicado:<br/> <br/>{moment(product.createdAt).format('MMMM Do YYYY')}</p>
                </div>
                <div className='detail-action'>
                    <ButtonPrimary 
                        onclick={() => {}}
                        text={'REACTIVAR ARTICULO'}/>
                </div>
       
        </div>
    </ClotesProductLayout>
  )
}

const ClotesProductLayout = styled.div`
    margin: 20px 0px;
    cursor: pointer;

    .checks {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .details {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    input[type="radio"] {
        width: 2em;
        height: 2em;
    }

    .details-img {
        display: flex;
        align-items: center;
    }

    .details-img img{
        width: 10em;
        height: 10em;
        color: #000;
    }

    .detail-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .detail-date {
        display: flex;
        justify-content: center;
        align-self: center;
    }

    .detail-action {
        display: flex;
        width: 20%;
    }

    @media screen and (max-width: 768px) {
        .detail-action {
            display: none;
        }
    }

    @media screen and (max-width: 1100px) {

        .detail-date {
            display: none;
        }

        .checks {
            display: none;
        }

        input[type="radio"] {
            display: none;
        }

        

    }
`;