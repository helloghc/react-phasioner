import React from 'react'
import styled from 'styled-components';

export default function AvatarUser({src}) {
    return (
        <AvatarUserCont src={src}>
            
        </AvatarUserCont>
    )
}

const AvatarUserCont = styled.img`
    height: 5em;
    width: 5em;
    background-image: url(${props => props.src});
    object-fit: cover;
    border-radius: 5rem;


    @media screen and (max-width: 800px){
        height: 4em;
        width: 4em;
    }
`;