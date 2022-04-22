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
                        name={product.titleProduct} 
                        img={product.image?.at(0)}
                        price={product.price}
                        />
                )) : null
            }
        {/* <h1>{spotProducts?.length ?? 'hpas'}</h1> */}
            
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
