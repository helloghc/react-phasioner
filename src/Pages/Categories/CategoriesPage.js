import React from 'react'
import styled from 'styled-components'
import ProductCard from '../Home/Components/ProductCard';
import FilterCategory from './Components/FilterCategory';
import TitleCategory from './Components/TitleCategory';

export default function CategoriesPage() {
    return (
        <CategoryContain>
            <div className='conter'>
                <div className='rute-path'>
                    <h4>Inicio / Mujer / Vestidos</h4>
                </div>
                <TitleCategory title={'Vestidos'}/>
                <FilterCategory/>
                <div className='products'>
                    <ProductCard 
                          name={'PANTALON CALVIN KLEIN'}
                          price={400}
                    />
                    <ProductCard 
                          name={'PANTALON CALVIN KLEIN'}
                          price={400}
                    />
                    <ProductCard 
                          name={'PANTALON CALVIN KLEIN'}
                          price={400}
                    />
                    <ProductCard 
                          name={'PANTALON CALVIN KLEIN'}
                          price={400}
                    />
                    <ProductCard 
                          name={'PANTALON CALVIN KLEIN'}
                          price={400}
                    />
                    <ProductCard 
                          name={'PANTALON CALVIN KLEIN'}
                          price={400}
                    />
                    <ProductCard 
                          name={'PANTALON CALVIN KLEIN'}
                          price={400}
                    />
                    <ProductCard 
                          name={'PANTALON CALVIN KLEIN'}
                          price={400}
                    />
                </div>
                
            </div>
        </CategoryContain>
    )
}


const CategoryContain = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;


    .conter{
        width: 100vw;
        max-width: 80vw;
    }

    .products{
        padding: 2em 0em;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

`;