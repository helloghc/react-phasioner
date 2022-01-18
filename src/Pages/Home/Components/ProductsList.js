import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard';


export default function ProductsList() {
    return (
        <ListContainer>
            <ProductCard
                name={'PANTALON CALVIN KLEIN'}
                price={400}
            />
            <ProductCard
                name={'PANTALON CALVIN KLEIN'}
                price={1200}
            />
            <ProductCard
                name={'PANTALON CALVIN KLEIN'}
                price={500}
            />
            <ProductCard
                name={'PANTALON CALVIN KLEIN'}
                price={200}
            />
            <ProductCard
                name={'PANTALON CALVIN KLEIN'}
                price={400}
            />
            <ProductCard
                name={'PANTALON CALVIN KLEIN'}
                price={400}
            />
         
            
        </ListContainer>
    )
}

const ListContainer = styled.section`
    width: 100%;
    display: flex;
    padding-top: 2em;
    flex-wrap: wrap;
    justify-content: space-between;
`;
