import React from 'react'
import styled from 'styled-components'
import Pant from '../../../Images/pantalon.jpg'
import FavOn from '../../../Images/favoriteoff.svg'
import { Link } from 'react-router-dom'


export default function ProductCard({name, img, price}) {
    return (
        <Link to={`/${name}`}>      
            <CardContent>
                <img src={Pant} alt='hola'/>
                <div className='title'>
                    <div className='line'></div>
                    <h4>{name}</h4>
                    <div className='line'></div>
                </div>
                <div className='actions'>
                    <div></div>
                    <p>$ {price} MXN</p>
                    <img src={FavOn} alt='favorito'/>
                </div>
            </CardContent>
        </Link>
    )
}


const CardContent = styled.div`
    width: 15em;
    cursor: pointer;
    margin-bottom: 2em;

    img{
        width: 100%;
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
        justify-content: space-between;
    }

    .actions img{
        width: 2em;
    }
`;
