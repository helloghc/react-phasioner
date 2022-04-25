import React, { useEffect } from 'react'
import styled from 'styled-components'
import useSpotlight from '../../../Hooks/useSpotlight';
import { ProductModel } from '../../../Models/product_model';
import ProductCard from './ProductCard';


export default function ProductsList() {
    const { spotProducts, getSpotProduts } = useSpotlight();

    useEffect(() => {
        getSpotProduts();
    }, [getSpotProduts]);

    return (
        <ListContainer>
            {
                spotProducts !== null ?
                spotProducts?.map((product: ProductModel) => (
                    <ProductCard 
                        key={product.id} 
                        product={product}
                        />
                )) : null
            }
        {/* <h1>{spotProducts?.length ?? 'hpas'}</h1> */}
            
        </ListContainer>
    )
}

const ListContainer = styled.section`
    width: 100%;
    display: grid;
        padding-top: 2em;
        grid-template-columns: repeat(auto-fill, minmax(150px, 2fr));
        grid-gap: 2em;
    justify-content: space-between;
`;
