import React from 'react'
import styled from 'styled-components'
import AvatarUser from '../../../Components/AvatarUser';
import ButtonPrimary from '../../../Components/ButtonPrimary'
import User from '../../../Images/user1.jpg'
import Start from '../../../Images/star.svg'
import ButtonSecondary from '../../../Components/ButtonSecondary';
import { Link } from 'wouter';

export default function Resume() {
    return (
        <ResumeConten>
            <h1 className='produc-name'>Vestido ZARA</h1>
            <h2 className='price'>$300</h2>
            <Link href={'/order'}>
                <ButtonPrimary text={'Comprar ahora'}/>
            </Link>
            <div className='description'>
                <p><strong>Etiqueta de marca: </strong> ZARA</p>
                <p><strong>Tipo de prenda: </strong> Vestido</p>
                <p><strong>Estado: </strong> Usado como nuevo</p>
                <p><strong>Estilo: </strong> Clasico</p>
                <p><strong>Talla: </strong> 26 de marca ZARA</p>
            </div>
            <div className='user-contain'>
                <div className='user-card'>
                    <AvatarUser src={User}/>
                    <div className='user-info'>
                        <h3>Maria Extein</h3>
                        <p><img src={Start} alt='icon'/> 4.6</p>
                    </div>
                </div>
                <div className='user-actions'>
                    <ButtonSecondary text={'Seguir'}/>
                    
                </div>
            </div>
        </ResumeConten>
    )
}

const ResumeConten = styled.section`
    width: 100%;  
    display: flex;
    flex-direction: column;
    margin-left: 3em;

    .produc-name{
        font-size: 3em;
        margin: 0;
    }

    .description{
        padding: 2em 0em;
    }

    .user-contain{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-self: center;
        align-items: center;
    }



    .user-card{
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .user-info{
        padding-left: 1em;
        justify-content: center;
        align-items: center;
        align-self: center;
    }
    .user-info h3 {
        margin: 0;
    }
    .user-info p {
        padding-top: .5em;
        margin: 0;
    }


    .user-actions {
        width: 14vw;
        display: flex;
    }

    .space{
        width: 1em;
    }


    @media screen and (max-width: 768px) {
        width: 100%;  
        display: flex;
        flex-direction: column;
        margin-left: 0em;
    }
`;