import React from 'react'
import styled from 'styled-components'

export default function ButtonSecondary({text}) {
    return (
        <ButtonS>
            {text}
        </ButtonS>
    )
}

var ButtonS = styled.button`
    width: 100%;
    background: transparent;
    border: #11D4E7 solid 2px;
    border-radius: 5px;
    color: #11D4E7;
    font-weight: bold;
    font-size: 1em;
    text-align: center;
    cursor: pointer;
    font-family: 'avenir-book';
    padding: 0.8em 0em;

`