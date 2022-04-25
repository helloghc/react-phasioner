import React, { useEffect } from 'react'
import styled from 'styled-components'
import TitleLine from '../../../Components/TitleLine';
import CategotyNav from '../Components/CategotyNav';
import ProductsList from '../Components/ProductsList';
import ButtonPrimary from '../../../Components/ButtonPrimary';
import useSpotlight from '../../../Hooks/useSpotlight';

export default function ProductsGreat() {



    const { spotProducts, getSpotProduts } = useSpotlight();

    useEffect(() => {
        getSpotProduts();
    }, [getSpotProduts]);
  
    return (
        <ProductListGreat>
            <div className='product-great-container'>
                <TitleLine
                    text={'PRODUCTOS DESTACADOS'}
                />
                <br/>
                <CategotyNav/>
                <ProductsList products={spotProducts}/>
                <div className='view-more'>
                    <div className='line'></div>
                    <div className='btn-cont'>
                        <ButtonPrimary text='VER TODO'/>
                    </div>
                    <div className='line'></div>
                </div>
                <div className='motivation'>
                    <p>
                        Somos una plataforma que cree ciegamente en el valor de la moda 
                        pre-loved, queremos darle una nueva vida a todo aquello que ya no
                        usas. Si no esta en el Shopping está en Phasioner.
                    </p>
                </div>
            </div>
            
        </ProductListGreat>
    )
}

const ProductListGreat = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;

    .product-great-container{
        width: 100vw;
        max-width: 80vw;
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

    .motivation{
        padding: 3em;
    }

    .motivation p{
        padding-left: 5em;
        padding-right: 5em;
        text-align: center;
        font-size: 1.5em;
        font-weight: 300;
    }

    @media screen and (max-width: 700px){
        .motivation{
            padding: 1em;
        }


        .motivation p{
            padding: 0;
        }
    }

`;
