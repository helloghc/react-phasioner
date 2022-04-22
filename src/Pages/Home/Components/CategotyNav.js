import React from 'react'
import styled from 'styled-components'

export default function CategotyNav() {
    return (
        <CategorySection>
            
                <ItemSelector selected={true}>Hombres</ItemSelector>
                <ItemSelector selected={false}>Mujeres</ItemSelector>
                <ItemSelector selected={false}>Niños</ItemSelector>
                <ItemSelector selected={false}>Diseñadores</ItemSelector>
                <ItemSelector selected={false}>Otros</ItemSelector>
                
        </CategorySection>
    )
}



const ItemSelector = styled.button(props => ({
    background: props.selected ? '#13D4E6' : '#ffffff',
    border: 'none',
    borderRadius: '5px',
    padding: '0.9em',
    fontWeight: '800',
    cursor: 'pointer',
    
}));

const CategorySection = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    ${ItemSelector}:hover{
        background: rgba(0, 0, 0, 0.1);
    }
`;


