import React, { useState } from 'react'
import styled from 'styled-components'


// images 
// import Vestido  from '../../,,/../../Images/vestido.jpg'

// icons
import favorite from '../../../Images/favoriteoff.svg'

import Logowpp from '../../../Images/wppblack.svg'
import LogoFb from '../../../Images/fbblack.svg'
import LogoYT from '../../../Images/ytblack.svg'
import LogoIG from '../../../Images/instablack.svg'
import { ProductModel } from '../../../Models/product_model'

export default function ImageViewer({ prod }: { prod: ProductModel }) {

    const [ image, setImage ] = useState(prod.image?.at(0));

    const handleImage = (image: string) => {
        setImage(image);
    }

    return (
        <ViewerConten>
            <div className='conten-data'>
                <div className='conten'>
                    <img src={image} alt='Vestido'  className='image-big'/>
                    <div className='footimage'>
                        <div className='addfav'>
                            <img src={favorite} alt='Vestido'  className='image-small'/>
                            <span>Añadir a favoritos</span>
                        </div>
                        <div className='share'>
                            <span>Compartir </span>
                            <div className='social-icons'>
                                <img src={Logowpp} alt=''/>
                                <img src={LogoFb} alt=''/>
                                <img src={LogoYT} alt=''/>
                                <img src={LogoIG} alt=''/>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className='list-image'>
                    {
                        prod.image!.map((img) => {
                            return <div onClick={()=>{handleImage(img)}}>
                                <img src={img} alt='Vestido' className='image-tile'/>
                            </div> 
                        })
                    }
                </div>
            </div>
            <br/>
            
        </ViewerConten>
    )
}

const ViewerConten = styled.div`
    display: block;
    justify-content: flex-start;


    .more{
        padding: 3em 0em;
    }


    .view-more{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .btn-cont{
        width: 10em;
    }

    .line{
        padding: 0;
        margin: 0;
        height: 2px;
        width: 30%;
        background: #000;
    }

    .footimage{
        background: #f5f5f5;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-self: center;
        align-content: center;
        align-items: center;
    }

    .share{
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
    }

    .addfav{
        display: flex;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
    }

    .conten-data{
        display: flex;
        flex-direction: row;
    }

    .conten{
        /* width: 24em; */
        margin-right: 2em;
        display: block;
    }

    .image-big {
        height: 100%;
        min-width: 15em;
        width: 100%;
        object-fit: cover;
    }

    .list-image{
        min-width: 5em;
        width: calc(50% - 10vw);
        display: flex;
        flex-direction: column;
    }
    
    .image-tile{
        width: 100%;
        margin-bottom: 2em;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        .image-big {
            width: 100%;
            height: 40vh;
            object-fit: cover;
        }


        .conten-data{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
        }


        .conten{
            width: 100%;
            margin-right: 0em;
            display: block;
        }
        
        .list-image{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 1em;
        }

        .image-tile{
            height: 6rem;
            cursor: pointer;
        }
    }
`;

