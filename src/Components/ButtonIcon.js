import React from 'react'
import styled from 'styled-components'


// Icons


export default  function ButtonIcon({text, icon}) {
    return <ButtonIcone ><img src={icon} alt='whatsapp icon' />{text}</ButtonIcone>
}


const ButtonIcone = styled.button`
    background-color: transparent;
    display: flex;
    border: none;
    color: #ffffff;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img{
        width: 23px;
        padding: 5px;
    }
`;