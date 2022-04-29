import React from 'react'
import styled from 'styled-components';

export default function LeftNavitem({image, name, onAction}: {image: string, name: string, onAction:()=> void}) {
  return (
    <ItemVar key={name} onClick={onAction}>
        <img src={image} alt={name} className='imag'/>
        <p>{name}</p>
    </ItemVar>
  )
}

const ItemVar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

    .imag {
        min-width: 2.5em;
        max-width: 2.5em;
        min-height: 2.5em;
        max-height: 2.5em;
        object-fit: contain;
        border-radius: 100%;
        background-color: #606060;
    }

    p {
        color: #ffffff;
        font-size: 0.6em;
        font-family: 'avenir-book';
    }

    @media screen and (max-width: 1000px) {
      
      .imag {
          min-width: 2em;
          max-width: 2em;
          min-height: 2em;
          max-height: 2em;
          object-fit: contain;
          border-radius: 100%;
          background-color: #606060;
      }

      p {
        display: none;
    }
    }
`;
