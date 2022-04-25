import React from 'react'
import styled from 'styled-components'
import AvatarUser from '../../../Components/AvatarUser';
import ButtonPrimary from '../../../Components/ButtonPrimary'
import User from '../../../Images/user1.jpg'
import Start from '../../../Images/star.svg'
import ButtonSecondary from '../../../Components/ButtonSecondary';
import { Link } from 'wouter';
import { ProductModel } from '../../../Models/product_model';
import { UserModel } from '../../../Models/user_models';

export default function Resume({ prod, user }: { prod: ProductModel, user: UserModel }) {
    return (
        <ResumeConten>
            <h1 className='produc-name'>{prod.titleProduct}</h1>
            <h2 className='price'>${prod.price}</h2>
            <Link href={'/order'}>
                <ButtonPrimary text={'Comprar ahora'}/>
            </Link>
            <div className='description'>
                <p><strong>Etiqueta de marca: </strong> {prod.brand}</p>
                <p><strong>Tipo de prenda: </strong> {prod.garment}</p>
                <p><strong>Estado: </strong> {prod.status}</p>
                <p><strong>Talla: </strong> {prod.wails}</p>
            </div>
            <div className='user-contain'>
                <div className='user-card'>
                    <AvatarUser src={user.photoURL}/>
                    <div className='user-info'>
                        <h3>{user.name}</h3>
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