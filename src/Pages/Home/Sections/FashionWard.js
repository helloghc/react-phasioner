import React from 'react'
import styled from 'styled-components'
import TitleLine from '../../../Components/TitleLine'
import ListArmary from '../Components/ListArmary';
import ButtonPrimary from '../../../Components/ButtonPrimary';

export default function FashionWard() {
    return (
        <FasionWardadito>
            <div className='container'>
                <TitleLine text={'ARMARIO DE MODA'}/>
                <ListArmary/>
                <div className='view-more'>
                    <div className='line'></div>
                    <div className='btn-cont'>
                        <ButtonPrimary text='VER TODO'/>
                    </div>
                    <div className='line'></div>
                </div>
            </div>
        </FasionWardadito>
    )
}


const FasionWardadito = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;

    .container{
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
`;