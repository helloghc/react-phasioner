import React from 'react'
import styled from 'styled-components'


export default function DescriptionCard({text, title, img}) {
    return (
        <CardContainer>
             <img src={img} alt='logo'/>
                <h3>{title}</h3>
                <p>Lorem ipsum asdnionads iondaos naosdna naos nms ns snsidnaoisd aoisnd nasdio nasidn naoisnd n naoisndaosidn nasiodn </p>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    width: 15em;
    align-content: center;
    align-self: center;
    text-align: center;
    padding: 3em;
`;