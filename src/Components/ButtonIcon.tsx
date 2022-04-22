import React from 'react'
import styled from 'styled-components'


// Icons
interface IconProps {
    readonly text: string
    readonly icon: string
    action: () => void
}

export default  function ButtonIcon({text, icon, action}: IconProps) {
    return <ButtonIcone onClick={action} ><img src={icon} alt='whatsapp icon' />{text}</ButtonIcone>
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
        width: 1.5em;
        padding: 5px;
    }
`;