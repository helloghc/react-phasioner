import React from 'react'
import styled from 'styled-components'
import TitleCategory from './Components/TitleCategory';

export default function CategoriesPage() {
    return (
        <CategoryContain>
            <div className='conter'>
                <div className='rute-path'>
                    <h4>Inicio / Mujer / Vestidos</h4>
                </div>
                <TitleCategory title={'Vestidos'}/>
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

`;