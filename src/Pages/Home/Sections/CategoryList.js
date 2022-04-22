import React from 'react'
import styled from 'styled-components'
import CategoryCard from '../../../Components/CategoryCard'

export default function CategoryList() {
    return (
        <CategoryContent>
            <div className='cont'>

                <CategoryCard 
                    name={'Hombres'}
                />
                <CategoryCard 
                    name={'Mujeres'}
                />
                <CategoryCard 
                    name={'Niños'}
                />
                <CategoryCard 
                    name={'Diseñadores'}
                />
            </div>
        </CategoryContent>
    )
}


const CategoryContent = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 3em 0em;
    flex-wrap: wrap;
    
    .cont{
        width: 100vw;
        max-width: 80vw;
        display: flex;
        justify-content: space-between;
    }
    
    @media screen and (max-width: 1000px) {
        padding: 3em 0em;
        flex-wrap: wrap;
        .cont{
            width: 100vw;
            background: red;
            flex-wrap: wrap;
            max-width: 90vw;
        }
    }

`;