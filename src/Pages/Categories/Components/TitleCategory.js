import React from 'react'
import styled from 'styled-components'

export default function TitleCategory({title}) {
    return (
        <TItleF>
            <h1>{title}</h1>
            <div className='liner'></div>
        </TItleF>
    )
}

const TItleF = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;

    
    .liner{
        padding: 0;
        margin: 0;
        height: 2px;
        width: 100%;
        background: #000;
    }

    h1{
        font-size: 3em;
        margin: 0;
        margin-bottom: 0.4em;
    }
`;