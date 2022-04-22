import React from 'react'
import styled from 'styled-components'
import ButtonPrimary from './ButtonPrimary';
import BackCategory from '../Images/categoryimg.jpg'


export default function CategoryCard({name}) {
    return (
        <CardCatego src={BackCategory}>
            <div className='conter'>
                <h3>Categoria</h3>
                <ButtonPrimary text={name}/>
            </div>
        </CardCatego>
    )
}

const CardCatego = styled.div`
    width: 8em;
    background-image: url(${props => props.src});
    object-fit: cover;
    padding: 4em;

    .conter{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
    }

    @media screen and (max-width: 630px) {
        object-fit: contain;
        width: 100% ;
    }
`;