import React from 'react'
import styled from 'styled-components'

import ProductsList from '../../Home/Components/ProductsList'
import ButtonPrimary from '../../../Components/ButtonPrimary'

// images 
import Vestido from '../../,,/../../Images/vestido.jpg'

// icons
import favorite from '../../../Images/favoriteoff.svg'

import Logowpp from '../../../Images/wppblack.svg'
import LogoFb from '../../../Images/fbblack.svg'
import LogoYT from '../../../Images/ytblack.svg'
import LogoIG from '../../../Images/instablack.svg'
import TitleLine from '../../../Components/TitleLine'

export default function ImageViewer() {
    return (
        <ViewerConten>
            <div className='conten-data'>
                <div className='conten'>
                    <img src={Vestido} alt='Vestido'  className='image-big'/>
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
                    <img src={Vestido} alt='Vestido' className='image-tile'/>
                    <img src={Vestido} alt='Vestido' className='image-tile'/>
                    <img src={Vestido} alt='Vestido' className='image-tile'/>
                </div>
            </div>
            <br/>
            <div className='more'>
                <TitleLine text={'Mas de este Phasioner'}/>
                <ProductsList />
                <div className='view-more'>
                    <div className='line'></div>
                    <div className='btn-cont'>
                        <ButtonPrimary text='VER TODO'/>
                    </div>
                    <div className='line'></div>
                </div>
            </div>
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
    }

    .conten{
        width: 100%;
        margin-right: 2em;
        display: block;
    }

    .image-big {
        /* height: 100%; */
        object-fit: cover;
    }

    .list-image{
        width: 10em;
        display: flex;
        flex-direction: column;
    }

    .image-tile{
        margin-bottom: 2em;
        cursor: pointer;
    }
`;

