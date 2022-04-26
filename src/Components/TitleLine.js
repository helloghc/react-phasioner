import React from 'react'
import styled from 'styled-components'


export default function TitleLine({ text }) {
    return (
        <TitleLineCont>
            <div className='line'></div>
            <h2>{text}</h2>
            <div className='line'></div>
        </TitleLineCont>
    )
}

const TitleLineCont = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h2{
        text-align: center;
        font-size: 1.5em;
        font-weight: 300;
        font-family: 'avenir-book';

    }

    .line{
        padding: 0;
        margin: 0;
        height: 2px;
        width: 30%;
        background: #000;
    }

    @media screen and (max-width: 700px){
        h2{
            font-size: 1.2em;
        }
    }
`;
