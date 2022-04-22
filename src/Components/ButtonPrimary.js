import React from 'react'
import styled from 'styled-components'

export default function ButtonPrimary({text}) {
    return (
        <ButtonP>
          {text}  
        </ButtonP>
    )
}


var ButtonP = styled.button`
    width: 100%;
    background-color: #11D4E7;
    border: none;
    border-radius: 5px;
    color: #000;
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
    padding: 0.8em 0em;

`
